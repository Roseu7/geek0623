import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export const FetchMessages = async (isAscending: boolean = false, baseTime: number = 0) => {
    const { data: authData, error: authError } = await supabase.auth.getUser();
    if (authError || !authData.user) {
        console.error('Error fetching user:', authError?.message);
        return [];
    }
    const user = authData.user.id;

    const now = new Date();
    const JST_OFFSET = 9 * 60;
    const jstNow = new Date(now.getTime() + (JST_OFFSET - now.getTimezoneOffset()) * 60000);

    const endDate = new Date(jstNow);
    endDate.setHours(baseTime, 0, 0, 0);

    const startDate = new Date(endDate);
    startDate.setDate(endDate.getDate() - 1);

    const jstStartDate = startDate.toISOString();
    const jstEndDate = endDate.toISOString();

    try {
        const { data, error } = await supabase
            .from('messages')
            .select('*')
            .eq("uid", user)
            .gte("created_at", jstStartDate)
            .lte("created_at", jstEndDate)
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