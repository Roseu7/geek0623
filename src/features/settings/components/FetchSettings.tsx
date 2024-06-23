import { supabase } from "@/utils/supabase/supabase";
import { Settings } from "@/types";

export const FetchSettings = async (): Promise<Settings> => {
    const { data: authData, error: authError } = await supabase.auth.getUser();
    if (authError || !authData.user) {
        console.error('Error fetching user:', authError?.message);
        return {
            theme: 'white',
            font: 'Anzumoji',
            dateFormat: '24h',
            baseTime: 0
        };
    }
    const user = authData.user.id;

    try {
        const { data, error } = await supabase
            .from('profiles')
            .select('settings')
            .eq('id', user)
            .single();

        if (error) {
            if (error.code === 'PGRST116') {
                const defaultSettings = {
                    theme: 'white',
                    font: 'Anzumoji',
                    dateFormat: '24h',
                    baseTime: 0
                };

                await supabase
                    .from('profiles')
                    .update({ id: user, settings: defaultSettings });

                return defaultSettings;
            } else {
                throw error;
            }
        }

        const settings = data?.settings as Settings;

        return settings;

    } catch (error) {
        console.error('Error fetching settings:', error);
        return {
            theme: 'white',
            font: 'Anzumoji',
            dateFormat: '24h',
            baseTime: 0
        };
    }
};
