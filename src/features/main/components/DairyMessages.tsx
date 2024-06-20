import React from "react";

export default function DairyMessages() {
  return (
    <>
      {/* 1,2,3の部分を、データベースの名前にすれば出力できる */}
      {[1, 2, 3, 4, 5, 6, 7, 8].map((value, index) => {
        return (
          <div className="flex-1 bg-white rounded-lg mt-4" key={index}>
            <div className="px-4 py-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">
                  {new Date().toDateString()}
                </span>
              </div>
              <p className="mt-2 text-zinc-600 ">ねぎにマヨネーズ！！</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
