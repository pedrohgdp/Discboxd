export default function TopBar() {
    return (
        <header className="w-full bg-[#0F172A] px-full pt-4">

            <div className="flex h-12 items-center justify-between">

                <span className="text-2xl font-bold tracking-tight text-white ml-10">
                    Disc<span className="text-indigo-400">boxd</span>
                </span>

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