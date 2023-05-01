import Image from "next/image";

export default function PlaylistPlayer( { thumbnail, title } ) {
    return (
        <a
            href='' 
            className='
                bg-neutral-500/20 hover:bg-neutral-100/20 transition-colors
                rounded
                flex items-center gap-4
                overflow-hidden
                group album-player
            '
        >
            <Image 
                src={thumbnail} 
                alt="Capa do album"
                height={104} 
                width={104}
            />
            <strong>
                {title}
            </strong>

            <button 
            className='
                flex items-center justify-center  
                w-12 h-12 pl-1 ml-auto mr-8 
                rounded-full 
                bg-green-500 shadow-xl shadow-black/30
                invisible group-hover:visible
                text-black 
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