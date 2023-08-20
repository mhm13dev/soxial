import React from "react";
import { CgSpinner } from "react-icons/cg";
import cn from "utils/src/cn";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const FormButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, className, type, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type ?? "button"}
        className={cn(
          "group w-full rounded-md bg-theme-dark px-3 py-2 font-medium text-white transition-colors hover:bg-theme-dark-2",
          className
        )}
        {...props}
      >
        {children}
        <CgSpinner className="ml-1 hidden h-5 w-5 animate-spin group-disabled:inline-block" />
      </button>
    );
  }
);

FormButton.displayName = "FormButton";

export default FormButton;
