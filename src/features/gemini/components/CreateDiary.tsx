import { createModel } from "@/utils/gemini/gemini";

export default async function CreateDiary(){
  const model = createModel();

  const prompt = "You have recorded the events and thoughts of the day as they happend. Please write today's diary entry based on those records, and be sure to answer in Japanese. The records are as follows."

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}