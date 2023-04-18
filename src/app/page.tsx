import { 
  Home as HomeIcon, 
  Search, 
  Library,
  ChevronLeft,
  ChevronRight,
  Play
} from 'lucide-react';
import Image from 'next/image';


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside 
          className="
            w-72  p-6
            bg-zinc-950
          "
        >
          <nav className='space-y-5'>
            <a 
              href="" 
              className='
                flex items-center gap-3 
                text-sm font-semibold text-zinc-200
              '
            >
              <HomeIcon />
              Home
            </a>
            <a 
              href="" 
              className='
                flex items-center gap-3 
                text-sm font-semibold text-zinc-200
              '
            >
              <Search />
              Search
            </a>
            <a 
              href="" 
              className='
                flex items-center gap-3 
                text-sm font-semibold text-zinc-200
              '
            >
              <Library />
              Your Library
            </a>
          </nav>

          <nav 
            className='
              flex flex-col gap-3
              mt-6 pt-6 
              border-t border-zinc-800
            '
          >
            <a 
              href=""
              className='text-sm text-zinc-400 hover:text-zinc-100'
            >
              My Playlist
            </a>

            <a 
              href=""
              className='text-sm text-zinc-400 hover:text-zinc-100'
            >
              Smooth Jazz
            </a>

            <a 
              href=""
              className='text-sm text-zinc-400 hover:text-zinc-100'
            >
              Blues
            </a>

            <a 
              href=""
              className='text-sm text-zinc-400 hover:text-zinc-100'
            >
              Top Brasil
            </a>

            <a 
              href=""
              className='text-sm text-zinc-400 hover:text-zinc-100'
            >
              Hot Hits Brasil
            </a>

            <a 
              href=""
              className='text-sm text-zinc-400 hover:text-zinc-100'
            >
              Trap BR
            </a>

            <a 
              href=""
              className='text-sm text-zinc-400 hover:text-zinc-100'
            >
              Hip Hop
            </a>
          </nav>
        </aside>
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

        </main>
      </div>

      <footer 
        className="
          bg-zinc-800 border-t 
          border-zinc-700
          p-6 
        "
      >
        Footer
      </footer>
    </div>
  )
}
