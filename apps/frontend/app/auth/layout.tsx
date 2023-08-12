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

  const data: {
    topLink: string;
    topLinkText: string;
    title: string;
    subtitle: string;
  } = {
    topLink: AppRoutes.auth.register,
    topLinkText: "Create an account",
    title: "Sign in to Soxial",
    subtitle: "A social media platform for everyone",
  };
  if (pathname === AppRoutes.auth.register) {
    data.topLink = AppRoutes.auth.signin;
    data.topLinkText = "Already have an account? Sign in";
    data.title = "Create account on Soxial";
  } else if (pathname === AppRoutes.auth.forgot_password) {
    data.topLink = AppRoutes.auth.signin;
    data.topLinkText = "Remembered your password? Sign in";
    data.title = "Reset Soxial password";
    data.subtitle =
      "Enter your email address or username and we'll send a link to your inbox!";
  }

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
            href={data.topLink}
            className="text-sm font-medium underline md:text-base"
          >
            {data.topLinkText}
          </Link>
        </div>

        <div className="flex flex-grow items-center">
          <div className="mx-auto max-w-sm">
            <SoxialLogoDark className="mx-auto mb-2 h-12 w-12" />
            <h1 className="mb-2 text-center text-2xl font-bold md:text-3xl md:font-semibold">
              {data.title}
            </h1>
            <p className="mb-8 text-center text-sm">{data.subtitle}</p>

            {children}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
