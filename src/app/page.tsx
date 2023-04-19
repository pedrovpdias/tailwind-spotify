import { 
  ChevronLeft,
  ChevronRight,
  Play,
} from 'lucide-react';
import Image from 'next/image';

import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main 
          className="
            flex-1
            p-6
          "
        >
          <div className='flex items-center gap-4' >
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>
            Good Afternoon
          </h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a
              href='' 
              className='
                bg-white/10 hover:bg-white/20 transition-colors
                rounded
                flex items-center gap-4
                overflow-hidden
                group
              '
            >
              <Image 
                src="/image/wasting-light.jpg" 
                alt="Capa do album"
                height={104} 
                width={104}
              />
              <strong>
                Wasting Light
              </strong>

              <button 
                className='
                  flex items-center justify-center  
                  w-12 h-12 pl-1 ml-auto mr-8 
                  rounded-full 
                  bg-green-500 
                  invisible group-hover:visible
                  text-black 
                '
              >
                <Play />
              </button>
            </a>

            <a
              href='' 
              className='
                bg-white/10 hover:bg-white/20 transition-colors
                rounded
                flex items-center gap-4
                overflow-hidden 
                group
              '
            >
              <Image 
                src="/image/born-n-raised.jpg" 
                alt="Capa do album"
                height={104} 
                width={104}
              />
              <strong>
                Wasting Light
              </strong>

              <button 
                className='
                  flex items-center justify-center  
                  w-12 h-12 pl-1 ml-auto mr-8 
                  rounded-full 
                  bg-green-500 
                  invisible group-hover:visible
                  text-black 
                '
              >
                <Play />
              </button>
            </a>

            <a
              href='' 
              className='
                bg-white/10 hover:bg-white/20 transition-colors
                rounded
                flex items-center gap-4
                overflow-hidden
                group
              '
            >
              <Image 
                src="/image/paradise-valley.jpg" 
                alt="Capa do album"
                height={104} 
                width={104}
              />
              <strong>
                Wasting Light
              </strong>

              <button 
                className='
                  flex items-center justify-center  
                  w-12 h-12 pl-1 ml-auto mr-8 
                  rounded-full 
                  bg-green-500 
                  invisible group-hover:visible
                  text-black 
                '
              >
                <Play />
              </button>
            </a>

            <a
              href='' 
              className='
                bg-white/10 hover:bg-white/20 transition-colors
                rounded
                flex items-center gap-4
                overflow-hidden
                group
              '
            >
              <Image 
                src="/image/sonic-highways.jpg" 
                alt="Capa do album"
                height={104} 
                width={104}
              />
              <strong>
                Wasting Light
              </strong>

              <button 
                className='
                  flex items-center justify-center  
                  w-12 h-12 pl-1 ml-auto mr-8 
                  rounded-full 
                  bg-green-500 
                  invisible group-hover:visible
                  text-black 
                '
              >
                <Play />
              </button>
            </a>

            <a
              href='' 
              className='
                bg-white/10 hover:bg-white/20 transition-colors
                rounded
                flex items-center gap-4
                overflow-hidden
                group
              '
            >
              <Image 
                src="/image/metallica.jpg" 
                alt="Capa do album"
                height={104} 
                width={104}
              />
              <strong>
                Wasting Light
              </strong>

              <button 
                className='
                  flex items-center justify-center  
                  w-12 h-12 pl-1 ml-auto mr-8 
                  rounded-full 
                  bg-green-500 
                  invisible group-hover:visible
                  text-black 
                '
              >
                <Play />
              </button>
            </a>

            <a
              href='' 
              className='
                bg-white/10 hover:bg-white/20 transition-colors
                rounded
                flex items-center gap-4
                overflow-hidden
                group
              '
            >
              <Image 
                src="/image/brand-new-eyes.jpg" 
                alt="Capa do album"
                height={104} 
                width={104}
              />
              <strong>
                Wasting Light
              </strong>

              <button 
                className='
                  flex items-center justify-center  
                  w-12 h-12 pl-1 ml-auto mr-8 
                  rounded-full 
                  bg-green-500 
                  invisible group-hover:visible
                  text-black 
                '
              >
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>
            Made for Pedro Dias
          </h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a 
              href='' 
              className='
                bg-zinc-500/5 hover:bg-white/5
                flex flex-col gap-2 p-3 
                rounded-md
              '
            >
              <Image 
                src="/image/dailymix-1.jpg" 
                alt="Capa do album"
                height={104} 
                width={104}
                className='w-full rounded'
              />
              <strong className='font-semibold'>
                Daily Mix 1
              </strong>
              <span className='text-sm text-zinc-500'>
                Metallica, AC/DC, Slipknot and more
              </span>
            </a>
            <a 
              href='' 
              className='
                bg-zinc-500/5 hover:bg-white/5
                flex flex-col gap-2 p-3 
                rounded-md
              '
            >
              <Image 
                src="/image/dailymix-2.jpg" 
                alt="Capa do album"
                height={104} 
                width={104}
                className='w-full rounded'
              />
              <strong className='font-semibold'>
                Daily Mix 2
              </strong>
              <span className='text-sm text-zinc-500'>
                Foo Fighters, Green Day, Paramore and more
              </span>
            </a>
            <a 
              href='' 
              className='
                bg-zinc-500/5 hover:bg-white/5
                flex flex-col gap-2 p-3 
                rounded-md
              '
            >
              <Image 
                src="/image/dailymix-3.jpg" 
                alt="Capa do album"
                height={104} 
                width={104}
                className='w-full rounded'
              />
              <strong className='font-semibold'>
                Daily Mix 3
              </strong>
              <span className='text-sm text-zinc-500'>
                Eminem, Jay-Z, Drake and more
              </span>
            </a>
            <a 
              href='' 
              className='
                bg-zinc-500/5 hover:bg-white/5
                flex flex-col gap-2 p-3 
                rounded-md
              '
            >
              <Image 
                src="/image/dailymix-4.jpg" 
                alt="Capa do album"
                height={104} 
                width={104}
                className='w-full rounded'
              />
              <strong className='font-semibold'>
                Daily Mix 4
              </strong>
              <span className='text-sm text-zinc-500'>
                John Mayer, Jason Mraz, Jack Johnson and more
              </span>
            </a>
            <a 
              href='' 
              className='
                bg-zinc-500/5 hover:bg-white/5
                flex flex-col gap-2 p-3 
                rounded-md
              '
            >
              <Image 
                src="/image/dailymix-5.jpg" 
                alt="Capa do album"
                height={104} 
                width={104}
                className='w-full rounded'
              />
              <strong className='font-semibold'>
                Daily Mix 5
              </strong>
              <span className='text-sm text-zinc-500'>
                Matuê, WIU, Bin and more
              </span>
            </a>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  )
}
