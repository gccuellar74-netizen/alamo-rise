import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";

import "@/app/globals.css";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { business } from "@/config/business";
import { seo } from "@/config/seo";
import {
  isLocale,
  localeCodes,
  locales,
  type Locale,
} from "@/lib/i18n/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>;

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const locale: Locale = localeParam;
  const isEnglish = locale === "en";

  const title = isEnglish
    ? seo.defaultTitle
    : "Contratista de Remodelación en San Antonio TX | Alamo Rise Home Solutions";

  const description = isEnglish
    ? seo.defaultDescription
    : "Servicios profesionales de remodelación en San Antonio, TX. Cocinas, baños, pisos, pintura, patios y mejoras para el hogar. Solicita una cotización gratis.";

  const canonicalPath = isEnglish ? "/en" : "/es";

  return {
    metadataBase: new URL(business.siteUrl),

    title: {
      default: title,
      template: seo.titleTemplate,
    },

    description,

    applicationName: business.businessName,

    authors: [
      {
        name: business.businessName,
      },
    ],

    creator: business.businessName,
    publisher: business.businessName,

    alternates: {
      canonical: canonicalPath,

      languages: {
        "en-US": "/en",
        "es-US": "/es",
        "x-default": "/en",
      },
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: "website",
      siteName: business.businessName,
      title,
      description,
      locale: isEnglish ? "en_US" : "es_US",
      alternateLocale: [
        isEnglish ? "es_US" : "en_US",
      ],
      url: canonicalPath,
      images: [
        {
          url: seo.socialImage,
          width: 1200,
          height: 630,
          alt: business.businessName,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [seo.socialImage],
    },

    verification: {
      google:
        process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
        undefined,
    },

    icons: {
      icon: "/favicon.ico",
      apple: "/apple-icon.png",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;

  return (
    <html
      lang={localeCodes[locale]}
      className={`${inter.variable} ${playfairDisplay.variable}`}
    >
      <body className="bg-white text-charcoal-950">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-charcoal-950 focus:shadow-elevated"
        >
          {locale === "en"
            ? "Skip to main content"
            : "Saltar al contenido principal"}
        </a>

        <Header locale={locale} />

        {children}

        <Footer locale={locale} />

        <MobileStickyCTA locale={locale} />
      </body>
    </html>
  );
}