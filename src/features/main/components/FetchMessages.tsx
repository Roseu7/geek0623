import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export const FetchMessages = async (isAscending: boolean = false) => {
    const { data: authData, error: authError } = await supabase.auth.getUser();
    if (authError || !authData.user) {
        console.error('Error fetching user:', authError?.message);
        return [];
    }
    const user = authData.user.id;

    const now = new Date();
    const JST_OFFSET = 9 * 60;
    const jstNow = new Date(now.getTime() + (JST_OFFSET - now.getTimezoneOffset()) * 60000);
    const jstToday = jstNow.toISOString().split('T')[0];

    const threeDaysAgo = new Date(jstNow);
    threeDaysAgo.setDate(jstNow.getDate() - 3);
    const jstThreeDaysAgo = threeDaysAgo.toISOString().split('T')[0];

    try {
        const { data, error } = await supabase
            .from('messages')
            .select('*')
            .eq("uid", user)
            .gte("created_at", `${jstThreeDaysAgo}T00:00:00.000Z`)
            .lte("created_at", `${jstToday}T23:59:59.999Z`)
            .order('created_at', { ascending: isAscending });

        if (error) {
            throw error;
        }

        return data;
    } catch (error) {
        console.error('Error fetching messages:', error);
        return [];
    }
};