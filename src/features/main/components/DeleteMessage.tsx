import { supabase } from "@/utils/supabase/supabase";
import { useRouter } from 'next/navigation';

export default async function DeleteMessage(messageId: number) {
    try {
        const router = useRouter();
        const res = await supabase
            .from("messages")
            .delete()
            .eq("id", messageId);
        router.refresh();
    } catch (error) {
        console.error("Error deleting message:", error);
    }
};