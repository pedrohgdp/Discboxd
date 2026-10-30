type publicationVariables = {
    imgSource: string
    text: String
    albumName: String
    note: number
}

export default function Publication( { imgSource, text, albumName, note } : publicationVariables){
	return (
        <div className="h-40 w-200 pl-2 pt-2">
            <div className="flex items-start gap-2">
                <img src={imgSource} className="w-[150px] h-[150px] shrink-0" />
                <div className="flex min-w0 flex-col flex-1 gap-2">
                    <div><h3>Jonh Lennon - Double Fantasy</h3></div>
                    <p>Nota: ★ ★ ★ ⯪ ☆</p>
                    <p className="[overflow-wrap:anywhere]">text</p>
                </div>
            </div>

            <div className="w-full h-[1px] bg-white my-4 opacity-20" aria-hidden="true" />
        </div>
    );
}
