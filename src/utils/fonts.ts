import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const genjyuuRegular = localFont({
  src: "../styles/fonts/GenJyuuGothic-Regular.ttf",
  weight: "400", // フォントのウェイトを指定
  style: "normal", // フォントのスタイルを指定
  display: "swap", // フォントの表示方法を指定
});

export const genjyuuBold = localFont({
  src: "../styles/fonts/GenJyuuGothic-Bold.ttf",
  weight: "700", // フォントのウェイトを指定
  style: "bold", // フォントのスタイルを指定
  display: "swap", // フォントの表示方法を指定
});
