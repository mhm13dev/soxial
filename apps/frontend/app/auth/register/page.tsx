import { NextPage } from "next";
import { FormButton, FormInput } from "../shared";

export const metadata = {
  title: "Register - Soxial",
};

const Register: NextPage = () => {
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

export default Register;
