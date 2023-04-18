import { 
  Home as HomeIcon, 
  Search, 
  Library,
  ChevronLeft,
  ChevronRight 
} from 'lucide-react'

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

          <h1 className='font-bold text-4xl'>
            Good Afternoon
          </h1>

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
