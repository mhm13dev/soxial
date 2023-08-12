"use client";

import React from "react";
import { FormButton, FormInput } from "../shared";

const ForgotPasswordForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      emailOrUsername: formData.get("emailOrUsername"),
    };

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        type="text"
        name="emailOrUsername"
        placeholder="Email or username"
        className="mb-4"
      />
      <FormButton type="submit">Reset Password</FormButton>
    </form>
  );
};

export default ForgotPasswordForm;
