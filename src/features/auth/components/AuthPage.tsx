import Image from "next/image";
import { BackgroundImage } from "@/components/BackgroundImage";
import { genjyuuBold } from "@/assets/fonts/fonts";
import Google from "@/assets/logos/google.png";
import X from "@/assets/logos/x.png";
import Discord from "@/assets/logos/discord.png";
import Apple from "@/assets/logos/apple.png";

export function AuthPage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-sm flex items-center justify-center">
      <BackgroundImage />
      <div className="w-full px-12 pt-48">
        <div className="flex flex-col items-center">
          {/* タイトル */}
          <h1
            className={`tracking-wide mb-16 text-center text-3xl text-zinc-900 ${genjyuuBold.className}`}
          >
            <a href="/">bottlemail</a>
          </h1>
          {/* アカウント登録ボタン */}
          <button className="py-4 bg-teal-500 rounded-full mb-8 w-80 h-14">
            <p
              className={`text-center text-slate-100 tracking-wide ${genjyuuBold.className}`}
            >
              電話番号・メールで続ける
            </p>
          </button>
          {/* Social */}
          <ul className="flex justify-between items-center list-none w-80">
            <li className="w-12 h-12 bg-zinc-200 rounded-full flex items-center justify-center">
              <button className="p-3">
                <Image src={Google} alt="Google" width={24} height={24} />
              </button>
            </li>
            <li className="w-12 h-12 bg-zinc-200 rounded-full flex items-center justify-center">
              <button className="p-3">
                <Image src={X} alt="X" width={22} height={22} />
              </button>
            </li>
            <li className="w-12 h-12 bg-zinc-200 rounded-full flex items-center justify-center">
              <button className="p-3">
                <Image src={Discord} alt="Discord" width={24} height={24} />
              </button>
            </li>
            <li className="w-12 h-12 bg-zinc-200 rounded-full flex items-center justify-center">
              <button className="px-3 pt-3 pb-4">
                <Image src={Apple} alt="Apple" width={20} height={20} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
