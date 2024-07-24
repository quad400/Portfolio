import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import PageTransistion from "@/components/page-transition";
import StairTransition from "@/components/stair-transition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: {
    default: `Portfolio | Coderblack`,
    template: `Portfolio | Coderblack`
  },
  description:
    "Portfolio of Adediji Abdulquadri that describes his work experices and skills",
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />

        <StairTransition />
        <PageTransistion>{children}</PageTransistion>
      </body>
    </html>
  );
}
