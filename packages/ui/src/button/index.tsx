import React from "react";
import cn from "utils/src/cn";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "rounded bg-green-500/20 px-4 py-1 text-green-500 transition hover:bg-green-500/30",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
