import clsx from "clsx";
import { type ButtonHTMLAttributes, type FC } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "primary" | "outline" | "secondary" | "destructive";
  className?: string;
}

const Button: FC<IProps> = ({
  label,
  size = "md",
  variant = "primary",
  className,
  ...rest
}) => {
  const sizeClasses = {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }[size];

  const variantClasses = {
    primary:
      "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90",
    secondary:
      "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--secondary)]/80",
    destructive:
      "bg-[var(--destructive)] text-white hover:bg-[var(--destructive)]/90",
    outline: "border border-[var(--border)] bg-[var(--background)] shadow-xs hover:bg-[var(--accent)] hover:text[var(--accent-foreground)]",
  }[variant];

  return (
    <button
      className={clsx(
        "rounded-sm font-medium transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
        sizeClasses,
        variantClasses,
        className
      )}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
