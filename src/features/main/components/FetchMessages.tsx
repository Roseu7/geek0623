import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export const FetchMessages = async () => {
    const { data: authData, error: authError } = await supabase.auth.getUser();
    if (authError || !authData.user) {
        console.error('Error fetching user:', authError?.message);
        return [];
    }
    const user = authData.user.id;

    const date = new Date().toISOString().split('T')[0];

    try {
        const { data, error } = await supabase
            .from('messages')
            .select('*')
            .eq("uid", user)
            .gte("created_at", `${date}T00:00:00.000Z`)
            .lte("created_at", `${date}T23:59:59.999Z`)
            .order('created_at', { ascending: false });

        if (error) {
            throw error;
        }

        return data;
    } catch (error) {
        console.error('Error fetching messages:', error);
        return [];
    }
};