import React from "react";
import cn from "utils/src/cn";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const FormButton: React.FC<Props> = ({
  children,
  className,
  type,
  ...props
}) => {
  return (
    <button
      type={type ?? "button"}
      className={cn(
        "w-full rounded-md bg-theme-dark px-3 py-2 font-medium text-white transition-colors hover:bg-theme-dark-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default FormButton;
