type publicationVariables = {
    imgSource: string
}

export default function Publication( { imgSource } : publicationVariables){
	return (

        <div className="bg-[#0F172c] h-40 w-300 p-2 m-2 rounded-lg flex items-start gap-2">
            <img src={imgSource} className="w-[120px] h-[120px]rounded-lg object-cover" />
            <div className="flex flex-col gap-2">
                <h3>Jonh Lennon - Double Fantasy</h3>
                <p>Nota: ★ ★ ★ ⯪ ☆</p>
                <p>Não me leve a mal, é de fato um bom album, mas não é a melhor coisa que Lennon fez.</p>
            </div>
        </div>
    );
}
