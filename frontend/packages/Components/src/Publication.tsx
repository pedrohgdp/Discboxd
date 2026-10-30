type publicationVariables = {
    imgSource: string
    text: String
    albumName: String
    note: number
}

export default function Publication({ imgSource, text, albumName, note }: publicationVariables) {
    return (
        <article className="h-50 w-200 pl-2 pt-5">
            <div className="flex items-start gap-2">
                
                <img src={imgSource} 
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
                    <p className="mt-1 text-base text-white/80 [overflow-wrap:anywhere]">text marconha do tamanho do meu saco para ve se ele esta trocando de linha normal como é que eu quero que ele troca para poder ver se esta tudo certo. mais um pouc para textar eokqwodkqwo</p>
                </div>
            </div>
            <div className="w-full h-[1px] bg-white my-4 opacity-20" aria-hidden="true" />
        </article>
    );
}
