"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type Props = {
  lang: "en" | "es";
};

type FormData = {
  full_name: string;
  phone: string;
  email: string;
  service_type: string;
  description: string;
  company?: string; // 🔒 Honeypot anti-spam
};

export default function ContactForm({ lang }: Props) {
  const isEnglish = lang === "en";

  const content = {
    title: isEnglish
      ? "Request Your Free Estimate"
      : "Solicita Tu Cotización Gratis",

    subtitle: isEnglish
      ? "Tell us about your project and we’ll contact you within 24 hours."
      : "Cuéntanos sobre tu proyecto y te contactaremos en menos de 24 horas.",

    fullName: isEnglish ? "Full Name" : "Nombre Completo",
    phone: isEnglish ? "Phone Number" : "Teléfono",
    email: isEnglish ? "Email Address" : "Correo Electrónico",
    serviceType: isEnglish ? "Type of Service" : "Tipo de Servicio",
    description: isEnglish
      ? "Project Description"
      : "Descripción del Proyecto",
    button: isEnglish ? "Submit Request" : "Enviar Solicitud",
    loading: isEnglish ? "Sending..." : "Enviando...",
    success: isEnglish
      ? "Message sent successfully! We’ll contact you soon."
      : "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.",
    error: isEnglish
      ? "There was an error. Please try again."
      : "Hubo un error al enviar. Por favor, inténtalo de nuevo.",
  };

  const services = isEnglish
    ? [
        "Decks & Patios",
        "Exterior Siding",
        "Floor Installation",
        "Interior Painting",
        "Full Remodeling",
        "Bathroom Remodeling",
        "Kitchen Remodeling",
        "Drywall Repair",
        "Roof Repair",
        "General Maintenance",
        "Other",
      ]
    : [
        "Decks y Patios",
        "Fachadas y Siding",
        "Instalación de Pisos",
        "Pintura Interior/Exterior",
        "Remodelación Completa",
        "Remodelación de Baño",
        "Remodelación de Cocina",
        "Reparación Drywall",
        "Reparación de Techo",
        "Mantenimiento General",
        "Otro",
      ];

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error();

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white"
    >
      <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          {content.title}
        </h2>
        <p className="text-lg text-slate-300">{content.subtitle}</p>
      </div>

      <div className="max-w-3xl mx-auto p-8 bg-white text-slate-900 shadow-2xl rounded-2xl border border-slate-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-y-6"
        >
          {/* Nombre */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              {content.fullName}
            </label>
            <input
              {...register("full_name", {
                required: isEnglish
                  ? "Name is required"
                  : "El nombre es obligatorio",
              })}
              className="input-style"
              placeholder="John Doe"
            />
            {errors.full_name && (
              <p className="error-text">{errors.full_name.message}</p>
            )}
          </div>

          {/* Teléfono + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">
                {content.phone}
              </label>
              <input
                type="tel"
                {...register("phone", {
                  required: isEnglish
                    ? "Phone is required"
                    : "El teléfono es obligatorio",
                })}
                className="input-style"
                placeholder="(210) 000-0000"
              />
              {errors.phone && (
                <p className="error-text">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                {content.email}
              </label>
              <input
                type="email"
                {...register("email", {
                  required: isEnglish
                    ? "Email is required"
                    : "El email es obligatorio",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: isEnglish ? "Invalid email" : "Email inválido",
                  },
                })}
                className="input-style"
                placeholder="email@example.com"
              />
              {errors.email && (
                <p className="error-text">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Servicio */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              {content.serviceType}
            </label>
            <select
              {...register("service_type", {
                required: isEnglish
                  ? "Select a service"
                  : "Seleccione un servicio",
              })}
              className="input-style bg-white"
            >
              <option value="">{content.serviceType}</option>
              {services.map((service, i) => (
                <option key={i} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service_type && (
              <p className="error-text">{errors.service_type.message}</p>
            )}
          </div>

          {/* Descripción */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              {content.description}
            </label>
            <textarea
              rows={4}
              {...register("description", {
                required: isEnglish
                  ? "Please describe your project"
                  : "Describe tu proyecto",
              })}
              className="input-style resize-none"
              placeholder={
                isEnglish
                  ? "Tell us more about your project..."
                  : "Cuéntanos más sobre lo que necesitas..."
              }
            />
            {errors.description && (
              <p className="error-text">{errors.description.message}</p>
            )}
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-black hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg disabled:opacity-50"
          >
            {status === "loading" ? content.loading : content.button}
          </button>

          {/* Mensajes */}
          {status === "success" && (
            <div className="success-box">{content.success}</div>
          )}

          {status === "error" && (
            <div className="error-box">{content.error}</div>
          )}

          {/* 🔒 Honeypot Anti-Spam */}
          <input
            type="text"
            {...register("company")}
            autoComplete="off"
            tabIndex={-1}
            className="hidden"
          />

        </form>
      </div>
    </section>
  );
}