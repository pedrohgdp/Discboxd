"use client"

type page = {
    isMain: boolean
    isPrivateProfile: boolean
}

export default function TopBar( {isMain, isPrivateProfile }: page ) {
    const mainPageLink = process.env.NEXT_PUBLIC_MAIN_URL;

    return (
        <header className="w-full bg-[#0F172A] px-full pt-4">

            <div className="flex h-12 items-center justify-between">

                <a onClick={() => {
                    if(mainPageLink){
                        window.location.href = mainPageLink;
                    }
                }}
                    className="text-2xl font-bold tracking-tight text-white ml-10 cursor-default">
                    Disc<span
                        onClick={() => {
                            if(mainPageLink){
                                window.location.href = mainPageLink;
                            }
                        }}
                        className="text-indigo-400">boxd</span>
                </a>

                <div className="flex gap-2 items-center">
                    <a
                        href="http://localhost:3000"
                        className={`flex items-center gap-3 rounded-xl ${isMain
                                    ? "bg-indigo-500/15 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-white" 
                                    : "bg-[#0F172A] px-4 py-3 text-sm font-medium transition-colors hover:bg-indigo-500/20"}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m3 10 9-7 9 7" />
                            <path d="M5 9v12h14V9" />
                            <path d="M9 21v-8h6v8" />
                        </svg>
                        Home
                    </a>

                    <a
                        href="http://localhost:3001"
                        className={`flex items-center gap-3 rounded-xl ${isPrivateProfile
                                    ? "bg-indigo-500/15 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-white" 
                                    : "bg-[#0F172A] px-4 py-3 text-sm font-medium transition-colors hover:bg-indigo-500/20"}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="8" r="4" />
                            <path d="M5 21a7 7 0 0 1 14 0" />
                        </svg>
                            My profile
                    </a>
                </div>

                <div className="flex mr-4 w-72 items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 transition-all focus-within:border-indigo-400 focus-within:ring-1 focus-within:ring-indigo-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-slate-400"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                    </svg>

                    <input
                        type="text"
                        placeholder="Search people..."
                        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                    />
                </div>
            </div>

            <div className="mt-4 h-px w-full bg-white/10" />
        </header>
    );
}