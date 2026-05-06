import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactEmailProps = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export async function sendContactEmail({
  name,
  email,
  phone,
  message,
}: ContactEmailProps) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>",
      to: ["gccuellar74@gmail.com"], // ✅ CAMBIA ESTE EMAIL SI QUIERES OTRO DESTINO
      subject: `Nueva solicitud de cotización - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Nueva Solicitud de Cotización</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
          <hr />
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error("Error sending email");
    }

    return data;
  } catch (err) {
    console.error("Email send failed:", err);
    throw err;
  }
}