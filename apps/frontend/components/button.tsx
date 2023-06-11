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
        "py-1 px-4 rounded bg-green-500/20 text-green-500 hover:bg-green-500/30 transition",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
