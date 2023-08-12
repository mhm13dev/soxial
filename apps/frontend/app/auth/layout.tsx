"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SoxialLogoLight from "assets/svg/soxial-logo-light.svg";
import SoxialLogoDark from "assets/svg/soxial-logo-dark.svg";
import AuthPageCover from "assets/images/auth-page-cover.jpg";
import { AppRoutes } from "@/constants/app-routes";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const isSignInPage = pathname === AppRoutes.auth.signin;

  return (
    <main className={"flex min-h-screen"}>
      <section className="section-left relative hidden w-full bg-theme-dark/70 p-4 lg:block">
        <Image
          src={AuthPageCover}
          alt="Soxial Auth Page Cover"
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
            href={
              isSignInPage ? AppRoutes.auth.register : AppRoutes.auth.signin
            }
            className="text-sm font-medium underline md:text-base"
          >
            {isSignInPage
              ? "Create an account"
              : "Already have an account? Sign in"}
          </Link>
        </div>

        <div className="flex flex-grow items-center">
          <div className="mx-auto max-w-sm">
            <SoxialLogoDark className="mx-auto mb-2 h-12 w-12" />
            <h1 className="mb-2 text-center text-2xl font-bold md:text-3xl md:font-semibold">
              Create account on Soxial
            </h1>
            <p className="mb-8 text-center text-sm">
              A social media platform for everyone
            </p>

            {children}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
