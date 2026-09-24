export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

export const localeShortLabels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};

export const localeCodes: Record<Locale, string> = {
  en: "en-US",
  es: "es-US",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}