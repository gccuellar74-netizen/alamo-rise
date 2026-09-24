import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import Link from "next/link";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost";

type ButtonSize =
  | "sm"
  | "md"
  | "lg";

type SharedButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
};

type LinkButtonProps =
  SharedButtonProps &
    Omit<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      "href" | "className" | "children"
    > & {
      href: string;
    };

type NativeButtonProps =
  SharedButtonProps &
    Omit<
      ButtonHTMLAttributes<HTMLButtonElement>,
      "className" | "children"
    > & {
      href?: undefined;
    };

export type ButtonProps =
  | LinkButtonProps
  | NativeButtonProps;

const variantClasses: Record<
  ButtonVariant,
  string
> = {
  primary:
    "bg-brand-600 text-white shadow-sm hover:bg-brand-700 active:bg-brand-800",

  secondary:
    "border border-charcoal-300 bg-white text-charcoal-950 hover:border-charcoal-400 hover:bg-charcoal-50",

  ghost:
    "bg-transparent text-charcoal-950 hover:bg-charcoal-100",
};

const sizeClasses: Record<
  ButtonSize,
  string
> = {
  sm: "min-h-10 px-4 py-2 text-sm",

  md: "min-h-12 px-5 py-3 text-sm sm:text-base",

  lg: "min-h-14 px-6 py-3.5 text-base",
};

function getButtonClassName({
  variant,
  size,
  fullWidth,
  className,
}: {
  variant: ButtonVariant;
  size: ButtonSize;
  fullWidth: boolean;
  className?: string;
}) {
  return [
    "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors",
    "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");
}

function isExternalHref(
  href: string,
) {
  return /^(https?:\/\/|mailto:|tel:)/i.test(
    href,
  );
}

export function Button(
  props: ButtonProps,
) {
  if (
    "href" in props &&
    typeof props.href === "string"
  ) {
    const {
      href,
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      className,
      ...linkProps
    } = props as LinkButtonProps;

    const buttonClassName =
      getButtonClassName({
        variant,
        size,
        fullWidth,
        className,
      });

    if (isExternalHref(href)) {
      return (
        <a
          href={href}
          className={buttonClassName}
          {...linkProps}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={buttonClassName}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const {
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    className,
    type = "button",
    ...buttonProps
  } = props as NativeButtonProps;

  const buttonClassName =
    getButtonClassName({
      variant,
      size,
      fullWidth,
      className,
    });

  return (
    <button
      type={type}
      className={buttonClassName}
      {...buttonProps}
    >
      {children}
    </button>
  );
}