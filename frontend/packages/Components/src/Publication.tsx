type publicationVariables = {
    imgSource: string
    text: String
    albumName: String
    note: number
}

export default function Publication({ imgSource, text, albumName, note }: publicationVariables) {
    return (
        <div className="h-50 w-200 pl-2 pt-2">
            <div className="flex items-start gap-2">
                <img src={imgSource} className="w-[200px] h-[200px] shrink-0" />
                <div className="flex min-w0 flex-col flex-1 gap-2">
                    <h3 className="text-[26px]">Jonh Lennon - Double Fantasy</h3>
                    <p className="text-[23px]">Nota: ★ ★ ★ ⯪ ☆</p>
                    <p className="[overflow-wrap:anywhere] text-[20px]">text marconha</p>
                </div>
            </div>

            <div className="w-full h-[1px] bg-white my-4 opacity-20" aria-hidden="true" />
        </div>
    );
}
