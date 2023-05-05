import Image from "next/image";

export default function PlaylistCard( {thumbnail, title, description} ) {
    
    function resizeText( text ) {
        const sizeText  = text.length;
        
        if(text.length > 36) {
            text = text.substring( 0, 36) + "..."; 
            return text;
        }

        else return text;
    }

    return (
        <a 
            href='' 
            className='
                bg-neutral-800/30 hover:bg-white/10
                flex flex-col gap-5 p-4 
                rounded-md relative group
                w-44
            '
        >
            <div
                className="w-full h-36 rounded
                    shadow-xl shadow-black/40 overflow-hidden"
            >
                <Image 
                    src={thumbnail}
                    height={160}
                    width={160}
                    alt={title}
                    className="w-auto h-full"
                />
            </div>
            <div className="grid gap-2">
                <strong className='font-semibold'>
                    {title}
                </strong>
                <span className='text-sm text-neutral-500'>
                    {resizeText(description)}
                </span>
            </div>

            <button 
            className='
                flex items-center justify-center  
                w-12 h-12 pl-1 
                rounded-full 
                bg-green-500 
                opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 
                shadow-xl shadow-black/50
                absolute top-24 right-8
            '
            >
            <Image
                src="/image/icons/play.svg"
                height={24}
                width={24}
                alt='Play icon'
            />
            </button>
        </a>
    );
}