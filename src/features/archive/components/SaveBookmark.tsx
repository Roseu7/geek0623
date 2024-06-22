'use client';
import { createClient } from "@/utils/supabase/client";
import { useState, useEffect } from "react";

type SaveBookmarkProps = {
    userId: string;
    diaryId: number;
};

export default function SaveBookmark({ userId, diaryId }: SaveBookmarkProps) {
    const supabase = createClient();
    const [bookmarks, setBookmarks] = useState<number[]>([]);

    useEffect(() => {
        const fetchBookmarks = async () => {
        try {
            const { data, error } = await supabase
            .from('profiles')
            .select('bookmarks')
            .eq('id', userId)
            .single();

            if (error) {
            throw error;
            }

            if (data && data.bookmarks) {
            setBookmarks(data.bookmarks);
            }
        } catch (error) {
            console.error('Error fetching bookmarks:', error);
        }
        };

        fetchBookmarks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);

    const saveBookmark = async () => {
        try {
        const updatedBookmarks = [...bookmarks, diaryId];
        const { error } = await supabase
            .from('profiles')
            .update({ bookmarks: updatedBookmarks })
            .eq('id', userId);

        if (error) {
            throw error;
        }

        setBookmarks(updatedBookmarks);
        console.log('Bookmark saved successfully');
        } catch (error) {
        console.error('Error saving bookmark:', error);
        }
    };

    return (
        <button onClick={saveBookmark}>
            Save Bookmark
        </button>
    );
}
