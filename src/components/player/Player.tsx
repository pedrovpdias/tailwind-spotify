import Image from "next/image";

export default function Player() {
    return (
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
    );
}