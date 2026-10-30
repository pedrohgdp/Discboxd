export default function SideBar() {
    return (
        <aside className="flex h-full w-55 flex-col border-r border-slate-700/50 bg-[#0F172A] px-4 py-5">

            <nav className="flex flex-col gap-2">
                <a
                    href="#"
                    className="flex items-center gap-3 rounded-xl bg-indigo-500/15 px-4 py-3 text-sm font-medium text-indigo-400 transition-colors hover:bg-indigo-500/20"
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
                    href="#"
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
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

                <a
                    href="#"
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
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
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.8 3.12-.08-.02a1.7 1.7 0 0 0-1.7.5l-.06.06h-3.6l-.06-.06a1.7 1.7 0 0 0-1.7-.5l-.08.02-1.8-3.12.06-.06A1.7 1.7 0 0 0 9.4 15l-.08-.02v-3.6l.08-.02a1.7 1.7 0 0 0-.34-1.88L9 9.42l1.8-3.12.08.02a1.7 1.7 0 0 0 1.7-.5l.06-.06h3.6l.06.06a1.7 1.7 0 0 0 1.7.5l.08-.02 1.8 3.12-.06.06a1.7 1.7 0 0 0-.34 1.88l.08.02v3.6z" />
                    </svg>
                    Settings
                </a>

            </nav>

        </aside>
    );
}