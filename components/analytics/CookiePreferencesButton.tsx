"use client";

type CookiePreferencesButtonProps = {
  locale: "en" | "es";
  className?: string;
};

const STORAGE_KEY = "alamo-rise-cookie-consent";

export function CookiePreferencesButton({
  locale,
  className,
}: CookiePreferencesButtonProps) {
  function handleClick() {
    window.localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      {locale === "es"
        ? "Preferencias de cookies"
        : "Cookie Preferences"}
    </button>
  );
}