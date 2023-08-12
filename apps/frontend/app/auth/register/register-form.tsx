"use client";

import React from "react";
import { FormButton, FormInput } from "../shared";

const RegisterForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        type="email"
        name="email"
        placeholder="Email"
        className="mb-4"
      />
      <FormInput
        type="password"
        name="password"
        placeholder="Password"
        className="mb-4"
      />
      <FormInput
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        className="mb-5"
      />
      <FormButton type="submit">Register</FormButton>
    </form>
  );
};

export default RegisterForm;
