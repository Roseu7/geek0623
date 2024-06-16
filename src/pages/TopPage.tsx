import { genjyuuBold } from "@/utils/fonts";

export function TopPage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-sm">
      <div className="absolute top-96 left-12 right-12">
        <div className="flex flex-col">
          {/* タイトル */}
          <h1
            className={`mb-12 text-center text-3xl text-slate-700 ${genjyuuBold.className}`}
          >
            <a href="/">ぼとめる へようこそ</a>
          </h1>
          {/* アカウント登録ボタン */}
          <div className="py-4 bg-neutral-700 rounded-full mb-8">
            <p className="text-center text-white text-base font-normal leading-snug">
              電話番号・メールで続ける
            </p>
          </div>
          {/* Social */}
          {/* Google Twitter Discord Apple */}
          <ul className="flex justify-between items-center list-none">
            <li className="w-12 h-12 bg-neutral-700 rounded-full" />
            <li className="w-12 h-12 bg-neutral-700 rounded-full" />
            <li className="w-12 h-12 bg-neutral-700 rounded-full" />
            <li className="w-12 h-12 bg-neutral-700 rounded-full" />
          </ul>
        </div>
      </div>
    </div>
  );
}
