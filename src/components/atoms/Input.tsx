import clsx from "clsx";
import type { FC, InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "xs" | "sm" | "md" | "lg"; // rename
  className?: string;
}

const Input: FC<IProps> = ({
  inputSize = "md",
  className,
  ...rest
}) => {
  const sizeClasses = {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }[inputSize];



  return (
    <input
      className={clsx(
        "rounded-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--ring)] border border-[var(--border)]",
        sizeClasses,
        className
      )}
      {...rest}
    />
  );
};

export default Input;
