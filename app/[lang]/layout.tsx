import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

import PreFooter from "@/components/footer/PreFooter";
import Footer from "@/components/footer/Footer";
import { notFound } from "next/navigation";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const isEnglish = lang === "en";

  const title = isEnglish
    ? "Alamo Rise | Home Remodeling in San Antonio, TX"
    : "Alamo Rise | Remodelación de Casas en San Antonio, TX";

  const description = isEnglish
    ? "Professional roofing, drywall, painting, and full home remodeling services in San Antonio, Texas. Licensed & insured. Free estimates."
    : "Servicios profesionales de techado, drywall, pintura y remodelación completa en San Antonio, Texas. Licenciados y asegurados. Cotización gratuita.";

  return {
    metadataBase: new URL("https://alamorise.com"),
    title,
    description,
    keywords: isEnglish
      ? [
          "Home remodeling San Antonio",
          "Roofing services Texas",
          "Drywall repair San Antonio",
          "Kitchen remodeling TX",
          "General contractors San Antonio",
        ]
      : [
          "Remodelación San Antonio",
          "Contratistas Texas",
          "Reparación de drywall",
          "Remodelación de cocina TX",
          "Servicios de construcción San Antonio",
        ],
    alternates: {
      canonical: `https://alamorise.com/${lang}`,
      languages: {
        en: "https://alamorise.com/en",
        es: "https://alamorise.com/es",
      },
    },
        openGraph: {
      title,
      description,
      url: `https://alamorise.com/${lang}`,
      siteName: "Alamo Rise",
      locale: isEnglish ? "en_US" : "es_US",
      type: "website",
      images: [
        {
          url: "https://alamorise.com/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Alamo Rise Home Remodeling in San Antonio",
        },
      ],
    },

        twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["https://alamorise.com/images/og-image.jpg"],
      },

  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (lang !== "en" && lang !== "es") {
    notFound();
  }

  return (
    <>
      <Navbar lang={lang as "en" | "es"} />
      <main className="min-h-screen">{children}</main>
      <PreFooter lang={lang as "en" | "es"} />
      <Footer lang={lang as "en" | "es"} />
      <WhatsAppCTA />
    </>
  );
}