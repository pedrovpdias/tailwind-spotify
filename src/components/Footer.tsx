import { 
    Play,
    Shuffle,
    SkipBack,
    SkipForward,
    Repeat,
    Heart,
    Mic2,
    LayoutList,
    Laptop2,
    Volume1,
    Maximize2
  } from 'lucide-react';
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

            <Heart className='flex p-2 w-8 h-8 ml-2' />
            </div>
            <div className='flex flex-col items-center gap-2'>
            <div className='flex items-center gap-6'>
                <Shuffle className='text-zinc-200' size={20} />
                <SkipBack className='text-zinc-200' size={20} />
                <button 
                className='
                    flex items-center justify-center  
                    w-12 h-12 pl-1
                    rounded-full 
                    bg-white
                    text-black 
                '
                >
                <Play />
                </button>
                <SkipForward className='text-zinc-200' size={20} />
                <Repeat className='text-zinc-200' size={20} />
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
            <Mic2 size={20} />
            <LayoutList size={20} />
            <Laptop2 size={20} />
            <div className='flex items-center gap-2'>
                <Volume1 size={20} />
                <div className='h-1 rounded-full w-24 bg-zinc-600'>
                <div className='bg-zinc-200 w-20 h-1 rounded-full'></div>
                </div>
            </div>
            <Maximize2 size={20}/>
            </div>
        </footer>
    );
}