"use client";

import React from "react";
import sleep from "sleep-promise";
import { toastMessage } from "ui";
import { FormButton, FormInput } from "../shared";

const ForgotPasswordForm: React.FC = () => {
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
        emailOrUsername: formData.get("emailOrUsername")?.toString() ?? "",
      };

      console.log(data);

      if (data.emailOrUsername.trim() === "") {
        throw new Error("Please enter your email or username");
      }

      await sleep(2000);

      toastMessage("An email has been sent to your inbox", {
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
        name="emailOrUsername"
        placeholder="Email or username"
        className="mb-4"
      />
      <FormButton type="submit" ref={submitButtonRef}>
        Get Reset Link
      </FormButton>
    </form>
  );
};

export default ForgotPasswordForm;
