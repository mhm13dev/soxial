import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "rounded bg-green-500/20 px-4 py-1 text-green-500 transition hover:bg-green-500/30",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
