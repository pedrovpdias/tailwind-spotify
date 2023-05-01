import Image from "next/image";

export default function Player() {
    return (
        <div className='flex flex-col items-center gap-2'>
            <div className='flex items-center gap-6'>
                <Image
                    src="/image/icons/shuffle.svg"
                    height={16}
                    width={16}
                    alt='Shuffle icon'
                    className='fill-neutral-200'
                />
                <Image
                    src="/image/icons/skip-back.svg"
                    height={16}
                    width={16}
                    alt='Skip back icon'
                    className='fill-neutral-200'
                />
                <button 
                    className='
                        flex items-center justify-center  
                        w-8 h-8
                        rounded-full 
                        transition-colors duration-300
                        relative

                        before:absolute
                        before:bg-neutral-500 before:block before:w-8 before:h-8
                        before:rounded-full
                        hover:before:w-9 hover:before:h-9
                    '
                >
                <Image
                    src="/image/icons/pause.svg"
                    height={20}
                    width={20}
                    alt='Play icon'
                    className='text-black fill-black z-10'

                />
                </button>
                <Image
                    src="/image/icons/skip-foward.svg"
                    height={16}
                    width={16}
                    alt='Skip foward icon'
                    className='400'
                />
                <Image
                    src="/image/icons/repeat.svg"
                    height={16}
                    width={16}
                    alt='Repeat icon'
                    className='400'
                />
            </div>
            <div className='flex items-center gap-2'>
                <span className='text-xs text-neutral-500'>0:31</span>
                <div className='h-1 rounded-full w-96 bg-neutral-800'>
                <div className='bg-neutral-500 w-14 h-1 rounded-full'></div>
                </div>
                <span className='text-xs text-neutral-500'>4:49</span>
            </div>
        </div>
    );
}