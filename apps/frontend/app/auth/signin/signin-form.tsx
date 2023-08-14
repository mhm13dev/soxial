"use client";

import React from "react";
import Link from "next/link";
import sleep from "sleep-promise";
import { toastMessage } from "ui";
import { AppRoutes } from "@/constants/app-routes";
import { FormButton, FormInput } from "../shared";

const SignInForm: React.FC = () => {
  const submitButtonRef = React.useRef<HTMLButtonElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (submitButtonRef.current) {
        submitButtonRef.current.disabled = true;
      }

      const form = e.currentTarget;
      const formData = new FormData(form);

      const data = {
        usernameOrEmail: formData.get("usernameOrEmail")?.toString() ?? "",
        password: formData.get("password")?.toString() ?? "",
      };

      console.log(data);

      if (data.usernameOrEmail.trim() === "" || data.password === "") {
        throw new Error("Email/username and password are required");
      }

      await sleep(2000);

      toastMessage("Sign in successful", {
        variant: "dark",
        type: "success",
      });
    } catch (err: any) {
      toastMessage(err.message, {
        variant: "dark",
        type: "error",
      });
    } finally {
      if (submitButtonRef.current) {
        submitButtonRef.current.disabled = false;
      }
    }
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
      <FormButton type="submit" ref={submitButtonRef}>
        Sign in
      </FormButton>
    </form>
  );
};

export default SignInForm;
