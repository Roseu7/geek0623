import { FetchMessages } from "@/features/main/components/FetchMessages";
import { FetchSettings } from "@/features/settings/components/FetchSettings";
import { createModel } from "@/utils/gemini/gemini";
import { Message, Settings } from "@/types";

export default async function CreateDiary(){
  const model = createModel();
  const settings: Settings = await FetchSettings();
  const baseTime = settings.baseTime;
  const messages: Message[] = await FetchMessages(true, baseTime);

  const messageTexts = messages.map((msg) =>  `${new Date(msg.created_at).toLocaleString()} - ${msg.text}`).join('\n');

  const prompt = `以下の記録に基づいて、今日の日記を日本語で書いてください。ただし、書かれていないことについて日記に書くのはなるべく控えてください。時刻を必ず記載する必要はありません。記録は次の通りです。\n${messageTexts}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}