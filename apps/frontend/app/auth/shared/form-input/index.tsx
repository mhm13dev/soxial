import React from "react";
import cn from "utils/src/cn";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const FormInput: React.FC<Props> = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        "w-full rounded-md px-3 py-2 placeholder-gray-300 ring-2 ring-gray-200 focus:placeholder-theme-dark focus:outline-none focus:ring-current",
        className
      )}
      {...props}
    />
  );
};

export default FormInput;
