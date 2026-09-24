import type { HTMLAttributes, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export function Container({
  children,
  className = "",
  ...props
}: ContainerProps) {
  const classes = [
    "mx-auto w-full max-w-[80rem] px-5 sm:px-8 lg:px-10",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}