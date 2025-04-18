import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { getCssText } from "@/styles";
import { globalStyles } from "@/styles/global";

import logoImage from "@/assets/logo.svg";
import { Container, Header } from "@/styles/app/layout";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

globalStyles();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        <Container>
          <Header>
            <Image src={logoImage.src} alt="" width={130} height={52} />
          </Header>
          {children}
        </Container>
      </body>
    </html>
  );
}
