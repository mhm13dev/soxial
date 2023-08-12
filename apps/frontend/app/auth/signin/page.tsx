import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import SoxialLogoLight from "assets/svg/soxial-logo-light.svg";
import SoxialLogoDark from "assets/svg/soxial-logo-dark.svg";
import AuthPageCover from "assets/images/auth-page-cover.jpg";
import { AppRoutes } from "@/constants/app-routes";

const SignIn: NextPage = () => {
  return (
    <main className={"flex min-h-screen"}>
      <section className="section-left relative hidden w-full bg-theme-dark/70 p-4 lg:block">
        <Image
          src={AuthPageCover}
          alt="Auth page cover"
          fill={true}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <header className="flex items-center">
          <SoxialLogoLight className="h-8 w-8 fill-red-400" />
          <h1 className="ml-2 text-lg font-medium text-white">Soxial</h1>
        </header>
      </section>

      <section className="section-right flex w-full flex-col bg-white p-4">
        <div className="flex justify-end">
          <Link
            href={AppRoutes.auth.register}
            className="text-sm font-medium underline md:text-base"
          >
            Create an account
          </Link>
        </div>

        <div className="flex flex-grow items-center">
          <div className="mx-auto max-w-sm">
            <SoxialLogoDark className="mx-auto mb-2 h-12 w-12" />
            <h1 className="mb-2 text-center text-2xl font-bold md:text-3xl md:font-semibold">
              Sign in to Soxial
            </h1>
            <p className="mb-8 text-center text-sm">
              A social media platform for everyone
            </p>
            <form>
              <input
                type="text"
                className="w-full rounded-md px-3 py-2 placeholder-gray-300 ring-2 ring-gray-200 focus:placeholder-theme-dark focus:outline-none focus:ring-current"
                placeholder="Email or username"
              />
              <input
                type="Password"
                className="mt-4 w-full rounded-md px-3 py-2 placeholder-gray-300 ring-2 ring-gray-200 focus:placeholder-theme-dark focus:outline-none focus:ring-current"
                placeholder="Password"
              />

              <div className="flex justify-end">
                <Link
                  href={AppRoutes.auth.forgot_password}
                  className="mt-4 text-sm font-medium underline"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="mt-4 w-full rounded-md bg-theme-dark px-3 py-2 font-medium text-white transition-colors hover:bg-theme-dark-2"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
