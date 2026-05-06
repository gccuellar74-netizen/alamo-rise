import Image from "next/image";
import Link from "next/link";
import ServicesGrid from "@/components/ServicesGrid";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import FinancingBanner from "@/components/FinancingBanner";
import ContactForm from "@/components/ContactForm";


export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const { lang } = await params;

  const isEnglish = lang === "en";

  const content = {
    headline: isEnglish
      ? "Transforming Homes in San Antonio — Fast, Professional, and Guaranteed"
      : "Remodelamos tu Casa en San Antonio Rápido, Profesional y Garantizado",

    subheadline: isEnglish
      ? "From kitchens to painting, we do it all. 20+ years of fast, guaranteed results for families in San Antonio."
      : "Cocinas, baños, pintura y más. +20 años ayudando a familias en San Antonio con trabajos rápidos y garantizados",

    primaryCTA: isEnglish ? "Claim Your Free Estimate Today" : "Obtén tu Cotización Gratis Hoy",
    secondaryCTA: isEnglish ? "Call Now" : "Llama Ahora",

    trust1: isEnglish ? "Local Trusted Pro" : "Empresa Local Confiable",
    trust2: isEnglish ? "20+ Years Experience" : "Más de 20 Años de Experiencia",
    trust3: isEnglish
      ? "Satisfaction Guaranteed"
      : "Satisfacción Garantizada",
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

        <Image
          src="/images/hero.jpg"
          alt="Modern Home in San Antonio"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" />

        <div className="relative z-10 w-full max-w-7xl px-6 py-32 text-white">
          <div className="max-w-2xl space-y-6 text-left animate-fadeUp">

            {/* ✅ HEADLINE CON SOMBRA */}
            <h1 className="font-heading font-extrabold leading-tight text-4xl md:text-5xl lg:text-6xl [text-shadow:0_6px_20px_rgba(0,0,0,0.7)]">
              {content.headline}
            </h1>

            {/* ✅ SUBHEADLINE CON SOMBRA */}
            <p className="text-lg md:text-xl opacity-90 [text-shadow:0_4px_12px_rgba(0,0,0,0.6)]">
              {content.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={`/${lang}/contact`}
                className="btn-primary text-center"
              >
                {content.primaryCTA}
              </Link>

              <a
                href="tel:+12105551234"
                className="btn-outline text-center"
              >
                {content.secondaryCTA}
              </a>
            </div>

            {/* ✅ TRUST BADGES CON SOMBRA LIGERA */}
<div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm opacity-90">

  {/* Empresa Local Confiable */}
  <div className="flex items-center gap-3">
    <Image
      src="/images/iconos/conf.png"
      alt="Empresa Local Confiable"
      width={0}
      height={0}
      sizes="75px"
      className="w-[75px] h-auto object-contain"
    />
    <span className="[text-shadow:0_2px_6px_rgba(0,0,0,0.8)]">
      {content.trust1}
    </span>
  </div>

  {/* Más de 20 Años de Experiencia */}
  <div className="flex items-center gap-3">
    <Image
      src="/images/iconos/exp.png"
      alt="20+ Años de Experiencia"
      width={0}
      height={0}
      sizes="75px"
      className="w-[75px] h-auto object-contain"
    />
    <span className="[text-shadow:0_2px_6px_rgba(0,0,0,0.8)]">
      {content.trust2}
    </span>
  </div>

  {/* Satisfacción Garantizada */}
  <div className="flex items-center gap-3">
    <Image
      src="/images/iconos/gar.png"
      alt="Satisfacción Garantizada"
      width={0}
      height={0}
      sizes="75px"
      className="w-[75px] h-auto object-contain"
    />
    <span className="[text-shadow:0_2px_6px_rgba(0,0,0,0.8)]">
      {content.trust3}
    </span>
  </div>

</div>

          </div>
        </div>
      </section>

      <ServicesGrid lang={lang} />
      <BeforeAfterGallery lang={lang} />
      <TestimonialsCarousel lang={lang} />
      <FinancingBanner lang={lang} />

      <ContactForm lang={lang} />

    </>
  );
}