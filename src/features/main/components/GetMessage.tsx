'use client';

import { createClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react';
import { FetchMessages } from '../components/FetchMessages'; // インポート

type Message = {
    id: number;
    created_at: string;
    uid: string;
    text: string | null;
};

export default function GetMessages({ date }: { date: string }) {
    const supabase = createClient();
    const [user, setUser] = useState<string | undefined>(undefined);
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        const fetchUser = async () => {
            const { data, error } = await supabase.auth.getUser();
            if (error) {
                console.error('Error fetching user:', error.message);
            } else {
                setUser(data.user?.id);
            }
        };

        fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const loadMessages = async () => {
            if (user) {
                const messages = await FetchMessages();
                setMessages(messages);
            }
        };

        loadMessages();
    }, [user, date]);

    return (
        <div>
            {messages.map((message) => (
                <div key={message.id} className="text-lg p-4 bg-white shadow-md rounded-md my-2">
                    <p className="opacity-60 text-sm text-right">{new Date(message.created_at).toLocaleString()}</p>
                    <p className="">{message.text}</p>
                </div>
            ))}
        </div>
    );
}
