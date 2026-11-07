type publicationProps = {
    imgAlbumSource: string
    text: string
    albumName: string
    note: number
    imgUser: string
    userName: string
}

export default function Publication({ imgAlbumSource, text, albumName, note, imgUser, userName }: publicationProps) {
    return (
        <article className="w-full h-auto flex flex-col max-w-2xl mt-5 p-4 border border-white/10 rounded-sm shadow-lg shadow-black/10">
            
            {/* Cabeçalho do usuário */}
            <div className="flex items-center">
                <img src={imgUser} className="rounded-full w-8 h-8 m-2 object-cover" alt="User Photo" />
                <p className="text-[14px] m-0.5">{userName}</p>
                <p className="text-[20px] text-white/60 m-0.5">·</p>
                <p className="text-[14px] text-white/60 m-0.5">30/10/2026</p>
            </div>

            {/* Conteúdo principal */}
            <div className="flex items-start gap-4 pl-2 min-h-[150px]">
                
                <img src={imgAlbumSource} 
                    alt={`${albumName} cover`}
                    className="w-[150px] h-[150px] shrink-0 rounded-md object-cover shadow-lg shadow-black/30"
                />

                <div className="flex min-w-0 flex-col flex-1">
                    <div>
                        <h3 className="text-[45px] leading-none">Double Fantasy</h3>
                        <h4 className="text-s text-white/60 mt-1">John Lennon & Yoko ono</h4>
                        <p className="text-sm text-white/60 mt-1">rock · lançado 18.09.1982</p>
                    </div>

                    <p className="text-[15px] text-[#f5b301] mt-2">★ ★ ★ ⯪ ☆</p>
                    <p className="mt-1 text-base text-white/80 break-words whitespace-pre-wrap">
                        {text || "text marconha do tamanho do meu saco padasdasdqwjdiqwjdiqwjdiqwjdqwodjqwiodjwqiodjqwoidqwjdqwjidioqwdoiwqdjwqoidjqwdojiqwdoiqwjdqwjidqwiojdqwiodiowqdjiowqdoiwqdjiowqiora ve se ele esta trocando de linha normal como é que eu quero que ele troca para poder ver se esta tudo certo. mais um pouc para textar eokqwodkqwo"}
                    </p>
                </div>
            </div>
        
        </article>
    );
}
