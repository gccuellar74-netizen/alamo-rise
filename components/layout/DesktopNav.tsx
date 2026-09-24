import Link from "next/link";

import { navigation } from "@/config/navigation";
import type { Locale } from "@/lib/i18n/config";

type DesktopNavProps = {
  locale: Locale;
};

export function DesktopNav({ locale }: DesktopNavProps) {
  const items = navigation[locale];

  return (
    <nav
      aria-label={
        locale === "en"
          ? "Primary navigation"
          : "Navegación principal"
      }
      className="hidden flex-1 justify-center lg:flex"
    >
      <ul className="flex items-center gap-1 xl:gap-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="inline-flex min-h-10 items-center rounded-md px-3 py-2 text-sm font-medium text-charcoal-700 transition-colors hover:bg-charcoal-50 hover:text-charcoal-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 xl:px-3.5"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}