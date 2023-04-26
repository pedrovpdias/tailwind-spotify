import Image from "next/image";

export default function DailyMixCard( {thumbnail, title, description} ) {
    return (
        <a 
            href='' 
            className='
              bg-zinc-500/5 hover:bg-white/5
                flex flex-col gap-2 p-3 
                rounded-md relative group
            '
        >
            <Image 
                src={thumbnail} 
                alt="Capa do album"
                height={104} 
                width={104}
                className='w-full rounded'
            />
            <strong className='font-semibold'>
                {title}
            </strong>
            <span className='text-sm text-zinc-500'>
                {description}
            </span>

            <button 
            className='
                flex items-center justify-center  
                w-12 h-12 pl-1 
                rounded-full 
                bg-green-500 
                opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 
                absolute top-28 right-8
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