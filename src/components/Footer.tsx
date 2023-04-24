import Image from 'next/image';


export default function Footer() {
    return (
        <footer 
            className="
            bg-zinc-800 border-t 
            border-zinc-700
            px-6 py-4 flex items-center justify-between
            "
        >
            <div className='flex items-center gap-3'>
            <Image 
                src="/image/album/sonic-highways.jpg" 
                alt="Capa do album"
                height={56} 
                width={56}
            />
            <div className='flex flex-col'>
                <strong className='font-normal'>
                Something from Nothing
                </strong>
                <span className='text-sm text-zinc-400'>
                Foo Fighters
                </span>
            </div>

            <Image
                src="/image/icons/heart.svg"
                height={24}
                width={24}
                alt='Heart icon'
                className='flex p-2 w-8 h-8 ml-2 fill-zinc-400'
            />

            </div>
            <div className='flex flex-col items-center gap-2'>
            <div className='flex items-center gap-6'>
                <Image
                    src="/image/icons/shuffle.svg"
                    height={20}
                    width={20}
                    alt='Shuffle icon'
                    className='fill-zinc-200'
                />
                 <Image
                    src="/image/icons/skip-back.svg"
                    height={20}
                    width={20}
                    alt='Skip back icon'
                    className='fill-zinc-200'
                />
                <button 
                className='
                    flex items-center justify-center  
                    w-12 h-12 pl-1
                    rounded-full 
                    bg-white hover:bg-green-500
                    transition-colors duration-300
                '
                >
                 <Image
                    src="/image/icons/play.svg"
                    height={24}
                    width={24}
                    alt='Play icon'
                    className='text-black fill-black'

                />
                </button>
                <Image
                    src="/image/icons/skip-foward.svg"
                    height={20}
                    width={20}
                    alt='Skip foward icon'
                    className='fill-zinc-200'
                />
                 <Image
                    src="/image/icons/repeat.svg"
                    height={20}
                    width={20}
                    alt='Repeat icon'
                    className='fill-zinc-200'
                />
            </div>
            <div className='flex items-center gap-2'>
                <span className='text-xs text-zinc-500'>0:31</span>
                <div className='h-1 rounded-full w-96 bg-zinc-600'>
                <div className='bg-zinc-200 w-14 h-1 rounded-full'></div>
                </div>
                <span className='text-xs text-zinc-500'>4:49</span>
            </div>
            </div>
            <div className='flex items-center gap-4'>
            <Image
                src="/image/icons/lyrics.svg"
                height={20}
                width={20}
                alt='Lyrics icon'
            />
            <Image
                src="/image/icons/queue.svg"
                height={20}
                width={20}
                alt='Queue icon'
            />
            <Image
                src="/image/icons/device.svg"
                height={20}
                width={20}
                alt='Device icon'
            />

            <div className='flex items-center gap-2'>
                <Image
                    src="/image/icons/volume.svg"
                    height={20}
                    width={20}
                    alt='Volume icon'
                />
                <div className='h-1 rounded-full w-24 bg-zinc-600'>
                <div className='bg-zinc-200 w-20 h-1 rounded-full'></div>
                </div>
            </div>
            <Image
                src="/image/icons/maximize.svg"
                height={20}
                width={20}
                alt='Maximize icon'
            />
            </div>
        </footer>
    );
}