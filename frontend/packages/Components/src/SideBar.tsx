'use client'

type Button = {
    text: string
    path: string
}

type SideBarProps = {
    buttons: Button[];
};

export default function SideBar({ buttons } : SideBarProps){
    return(
        <div className="content-center grid gap-10">
            {buttons.map((button, index) => (
                <Button
                    key={index}
                    text={button.text}
                    path={button.path}
                />
            ))}
        </div>
    );
}

function Button({text, path} : Button){
    return (
        <button onClick={() => window.location.href = path } className="m-3 relative h-[50px] w-40 overflow-hidden border
                            border-indigo-400/60 bg-white/5 text-indigo-100 
                            shadow-2xl shadow-black/30 transition-all before:duration-200
                            before:absolute before:bottom-0 before:left-0 
                            before:top-0 before:z-0 before:h-full before:w-0 
                            before:bg-indigo-500/25 before:transition-all 
                            before:duration-500 hover:text-white hover:shadow-indigo-500/30 
                            hover:before:left-0 hover:before:w-full">
            <span className="relative z-10">{text}</span>
        </button>
    );
}