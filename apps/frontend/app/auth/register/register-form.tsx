"use client";

import React from "react";
import sleep from "sleep-promise";
import { toastMessage } from "ui";
import { FormButton, FormInput } from "../shared";

const RegisterForm: React.FC = () => {
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
        email: formData.get("email")?.toString() ?? "",
        password: formData.get("password")?.toString() ?? "",
        confirmPassword: formData.get("confirmPassword")?.toString() ?? "",
      };

      console.log(data);

      if (
        data.email.trim() === "" ||
        data.password === "" ||
        data.confirmPassword === ""
      ) {
        throw new Error("All fields are required");
      }

      if (data.password !== data.confirmPassword) {
        throw new Error("Passwords do not match");
      }

      await sleep(2000);

      toastMessage("Registration is successful", {
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
      <FormButton type="submit" ref={submitButtonRef}>
        Register
      </FormButton>
    </form>
  );
};

export default RegisterForm;
