import type { Metadata } from "next";
import { Providers } from "@/utils/chakra-ui/providers";
import { inter } from "@/assets/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Botomeru",
  description: "匿名交換日記アプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
