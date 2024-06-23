export type Settings = {
    theme: string;
    font: string;
    dateFormat: string;
    baseTime: number;
};

export type Message = {
    id: number;
    created_at: string;
    uid: string;
    text: string | null;
};