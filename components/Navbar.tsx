"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

type Props = {
  lang: "en" | "es";
};

export default function Navbar({ lang }: Props) {
  const [open, setOpen] = useState(false);

  const isEnglish = lang === "en";
  const toggleLang: "en" | "es" = isEnglish ? "es" : "en";

  const labels = {
    home: isEnglish ? "Home" : "Inicio",
    services: isEnglish ? "Services" : "Servicios",
    beforeAfter: isEnglish ? "Before & After" : "Antes y Después",
    testimonials: isEnglish ? "Testimonials" : "Testimonios",
    contact: isEnglish ? "Contact" : "Contacto",
    quote: isEnglish ? "Get a Quote" : "Cotizar",
  };

  return (
    <header className="sticky top-0 z-50 bg-[rgba(27,38,59,0.92)] backdrop-blur-md shadow-soft">
      <div className="max-w-7xl mx-auto px-7 flex items-center justify-between h-14">

        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center">
          <Image
            src="/images/logo2.jpg"
            alt="Alamo Rise Logo"
            width={180}
            height={100}
            priority
            className="h-14 w-auto md:h-16 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-white font-medium">
          <Link href={`/${lang}`} className="hover:text-accent transition">
            {labels.home}
          </Link>

          <Link href={`/${lang}#services`} className="hover:text-accent transition">
            {labels.services}
          </Link>

          <Link href={`/${lang}#before-after`} className="hover:text-accent transition">
            {labels.beforeAfter}
          </Link>

          <Link href={`/${lang}#testimonials`} className="hover:text-accent transition">
            {labels.testimonials}
          </Link>

          <Link href={`/${lang}#contact`} className="hover:text-accent transition">
            {labels.contact}
          </Link>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-6">
          {/* Language Switch */}
          <Link
            href={`/${toggleLang}`}
            className="text-white text-sm hover:text-accent transition"
          >
            {isEnglish ? "EN | ES" : "ES | EN"}
          </Link>

          {/* CTA */}
          <Link
            href={`/${lang}#contact`}
            className="ml-4 inline-flex items-center justify-center rounded-lg bg-amber-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-amber-600 hover:shadow-lg active:scale-95"
          >
            {labels.quote}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[rgba(27,38,59,0.95)] text-white px-6 pb-6 flex flex-col gap-4">

          <Link href={`/${lang}`} onClick={() => setOpen(false)}>
            {labels.home}
          </Link>

          <Link href={`/${lang}#services`} onClick={() => setOpen(false)}>
            {labels.services}
          </Link>

          <Link href={`/${lang}#before-after`} onClick={() => setOpen(false)}>
            {labels.beforeAfter}
          </Link>

          <Link href={`/${lang}#testimonials`} onClick={() => setOpen(false)}>
            {labels.testimonials}
          </Link>

          <Link href={`/${lang}#contact`} onClick={() => setOpen(false)}>
            {labels.contact}
          </Link>

          <Link
            href={`/${toggleLang}`}
            className="text-sm opacity-80"
            onClick={() => setOpen(false)}
          >
            {isEnglish ? "Switch to Spanish" : "Cambiar a Inglés"}
          </Link>

          <Link
            href={`/${lang}#contact`}
            className="bg-amber-500 text-white px-5 py-2 rounded-xl text-center mt-2"
            onClick={() => setOpen(false)}
          >
            {labels.quote}
          </Link>
        </div>
      )}
    </header>
  );
}