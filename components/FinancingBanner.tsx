import Link from "next/link";

type Props = {
  lang: "en" | "es";
};

export default function FinancingBanner({ lang }: Props) {
  const isEnglish = lang === "en";

  const content = {
    headline: isEnglish
      ? "Flexible Financing Available"
      : "Financiamiento Flexible Disponible",

    subheadline: isEnglish
      ? "Start your remodeling project today with affordable monthly payments."
      : "Comienza tu proyecto de remodelación hoy con pagos mensuales accesibles.",

    primaryCTA: isEnglish ? "Apply Now" : "Solicitar Ahora",
  };

  return (
    <section className="bg-[#E0D7C6] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
          flex 
          flex-col 
          lg:flex-row 
          items-center 
          justify-between 
          gap-10
        "
        >
          {/* TEXT CONTENT */}
          <div className="max-w-2xl text-center lg:text-left space-y-6">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl">
              {content.headline}
            </h2>

            <p className="text-lg md:text-xl text-gray-800">
              {content.subheadline}
            </p>

            {/* ✅ SINGLE CTA */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <Link
                href={`/${lang}#contact`}
                className="
                  inline-flex
                  items-center
                  justify-center
                  bg-black 
                  text-white 
                  px-10
                  py-4 
                  rounded-lg 
                  font-semibold 
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:opacity-90
                "
              >
                {content.primaryCTA}
              </Link>
            </div>
          </div>

          {/* VISUAL SIDE ACCENT */}
          <div className="hidden lg:block w-full max-w-sm">
            <div
              className="
              bg-white 
              rounded-2xl 
              p-8 
              shadow-soft 
              text-center
            "
            >
              <h3 className="font-heading font-bold text-xl mb-4">
                {isEnglish ? "Fast Approval" : "Aprobación Rápida"}
              </h3>

              <p className="text-gray-600">
                {isEnglish
                  ? "Quick application process with competitive rates."
                  : "Proceso rápido con tasas competitivas."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}