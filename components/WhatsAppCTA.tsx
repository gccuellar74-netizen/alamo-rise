"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppCTA() {
  const phoneNumber = "2109012025"; // 🔁 CAMBIA POR TU NÚMERO (formato internacional sin +)
  const message =
    "Hola, quiero una cotización para mi proyecto de remodelación.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-3
        rounded-full
        bg-green-500
        px-5
        py-3
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:bg-green-600
        hover:shadow-xl
        active:scale-95
      "
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline font-semibold">
        Cotizar por WhatsApp
      </span>
    </a>
  );
}