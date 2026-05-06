import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { sendContactEmail } from "@/lib/email";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(input: string) {
  return input.trim().replace(/[<>]/g, "");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      full_name,
      phone,
      email,
      service_type,
      description,
      company, // 🔥 Honeypot field (hidden in frontend)
    } = body;

    // ✅ Honeypot anti‑bot
    if (company) {
      return NextResponse.json(
        { message: "Spam detected" },
        { status: 400 }
      );
    }

    // ✅ Validación existencia
    if (!full_name || !phone || !email || !service_type || !description) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ Sanitizar
    const cleanName = sanitize(full_name);
    const cleanPhone = sanitize(phone);
    const cleanEmail = sanitize(email);
    const cleanService = sanitize(service_type);
    const cleanDescription = sanitize(description);

    // ✅ Validación longitud
    if (
      cleanName.length < 2 || cleanName.length > 100 ||
      cleanPhone.length < 7 || cleanPhone.length > 20 ||
      cleanDescription.length < 10 || cleanDescription.length > 1000
    ) {
      return NextResponse.json(
        { message: "Invalid input length" },
        { status: 400 }
      );
    }

    // ✅ Validación email real
    if (!isValidEmail(cleanEmail)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    // ✅ Insertar en PostgreSQL
    await pool.query(
      `
      INSERT INTO contact_requests 
      (full_name, phone, email, service_type, description)
      VALUES ($1, $2, $3, $4, $5)
      `,
      [cleanName, cleanPhone, cleanEmail, cleanService, cleanDescription]
    );

    // ✅ Enviar email
    await sendContactEmail({
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      message: `
Servicio solicitado: ${cleanService}

Mensaje:
${cleanDescription}
      `,
    });

    return NextResponse.json(
      { message: "Success" },
      { status: 200 }
    );

  } catch (error) {
    console.error("API CONTACT ERROR:", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}