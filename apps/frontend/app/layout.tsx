import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import cn from "utils/src/cn";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Soxial - A social media platform for everyone",
  description: "Soxial - A social media platform for everyone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "text-theme-dark")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
