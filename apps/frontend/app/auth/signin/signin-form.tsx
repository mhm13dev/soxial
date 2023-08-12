"use client";

import React from "react";
import Link from "next/link";
import { AppRoutes } from "@/constants/app-routes";
import { FormButton, FormInput } from "../shared";

const SignInForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      usernameOrEmail: formData.get("usernameOrEmail"),
      password: formData.get("password"),
    };

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        type="text"
        name="usernameOrEmail"
        placeholder="Email or username"
        className="mb-4"
      />
      <FormInput
        type="password"
        name="password"
        placeholder="Password"
        className="mb-4"
      />
      <div className="mb-4 flex justify-end">
        <Link
          href={AppRoutes.auth.forgot_password}
          className="text-sm font-medium underline"
        >
          Forgot password?
        </Link>
      </div>
      <FormButton type="submit">Sign in</FormButton>
    </form>
  );
};

export default SignInForm;
