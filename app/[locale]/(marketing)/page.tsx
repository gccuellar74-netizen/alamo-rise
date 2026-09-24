import { notFound } from "next/navigation";

import { AboutPreview } from "@/components/home/AboutPreview";
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider";
import { EstimateSection } from "@/components/home/EstimateSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FinancingSection } from "@/components/home/FinancingSection";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TrustBar } from "@/components/home/TrustBar";
import { ValueProposition } from "@/components/home/ValueProposition";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

import { getDictionary } from "@/lib/i18n/dictionaries";
import {
  isLocale,
  type Locale,
} from "@/lib/i18n/config";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({
  params,
}: HomePageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;

  const home = await getDictionary(locale, "home");

  return (
    <main id="main-content">
      <Hero
        locale={locale}
        content={home.hero}
      />

      <TrustBar content={home.trustBar} />

      <ServicesGrid
        locale={locale}
        content={home.services}
      />

      <ValueProposition
        content={home.valueProposition}
      />

      <BeforeAfterSlider
        content={home.beforeAfter}
      />

      <FeaturedProjects
        locale={locale}
        content={home.featuredProjects}
      />

      <WhyChooseUs
        content={home.whyChooseUs}
      />

      <Process
        content={home.process}
      />

      <TestimonialsSection
        locale={locale}
        content={home.testimonials}
      />

      <AboutPreview
        locale={locale}
        content={home.about}
      />

      <FinancingSection
        locale={locale}
        content={home.financing}
      />

      <ServiceAreas
        locale={locale}
        content={home.serviceAreas}
      />

      <EstimateSection
        locale={locale}
        content={home.estimate}
      />

      <FinalCTA
        locale={locale}
        content={home.finalCta}
      />
    </main>
  );
}