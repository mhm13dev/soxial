import { NextPage } from "next";
import Link from "next/link";
import { AppRoutes } from "@/constants/app-routes";
import { FormButton, FormInput } from "../shared";

export const metadata = {
  title: "Sign in - Soxial",
};

const SignIn: NextPage = () => {
  return (
    <form>
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

export default SignIn;
