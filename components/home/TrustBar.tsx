import {
  BadgeCheck,
  MapPin,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import type { EnglishHomeDictionary } from "@/content/en/home";
import type { SpanishHomeDictionary } from "@/content/es/home";

type HomeDictionary =
  | EnglishHomeDictionary
  | SpanishHomeDictionary;

type TrustBarProps = {
  content: HomeDictionary["trustBar"];
};

const iconMap = {
  "local-team": MapPin,
  insured: ShieldCheck,
  "workmanship-warranty": BadgeCheck,
  financing: WalletCards,
} as const;

export function TrustBar({
  content,
}: TrustBarProps) {
  const verifiedItems = content.items.filter(
    (item) => item.verified,
  );

  if (verifiedItems.length === 0) {
    return null;
  }

  return (
    <section
      aria-label="Trust and business highlights"
      className="border-y border-charcoal-200 bg-white"
    >
      <Container>
        <ul
          className={[
            "grid gap-0",
            verifiedItems.length === 1
              ? "grid-cols-1"
              : verifiedItems.length === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : verifiedItems.length === 3
                  ? "grid-cols-1 sm:grid-cols-3"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
          ].join(" ")}
        >
          {verifiedItems.map((item, index) => {
            const Icon =
              iconMap[
                item.key as keyof typeof iconMap
              ] ?? BadgeCheck;

            return (
              <li
                key={item.key}
                className={[
                  "flex min-h-28 items-center gap-4 py-6",
                  index > 0
                    ? "border-t border-charcoal-200 sm:border-t-0"
                    : "",
                  verifiedItems.length > 1 &&
                  index % 2 !== 0
                    ? "sm:border-l sm:border-charcoal-200 sm:pl-6"
                    : "",
                  verifiedItems.length >= 3 &&
                  index > 0
                    ? "lg:border-l lg:border-charcoal-200 lg:pl-6"
                    : "",
                  index > 0
                    ? "lg:border-t-0"
                    : "",
                ].join(" ")}
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                  <Icon
                    aria-hidden="true"
                    className="size-5"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-charcoal-950 sm:text-base">
                    {item.title}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-charcoal-500 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}