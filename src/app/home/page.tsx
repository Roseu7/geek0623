import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MessageInput from "@/features/main/components/MessageInput";
import ShowMessages from "@/features/main/components/ShowMessages";
import CreateMessage from "@/features/main/components/CreateMessage";


export default function MainPage(): JSX.Element {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-100">
        <Header />
        <main className="flex-1 overflow-y-auto">
            <div className="container mx-auto px-4 py-6">
            <div className="hidden sm:block">
                <MessageInput />
            </div>
            <ShowMessages />
            </div>
        </main>
        <CreateMessage />
        <Footer />
        </div>
    );
}