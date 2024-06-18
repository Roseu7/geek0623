import { Main } from "@/features/main/components/Main";
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function Home() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/auth')
  }

  return (
    <div className="relative antialiased">
      <Main />
    </div>
  );
}