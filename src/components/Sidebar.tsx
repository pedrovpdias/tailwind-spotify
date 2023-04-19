import { 
    Home as HomeIcon, 
    Search, 
    Library,
  } from 'lucide-react';
import Image from 'next/image';

export default function Sidebar() {
    return (
        <aside 
          className="
            w-60  p-6
            bg-zinc-950
          "
        >
          <Image 
            src='/image/logo.png'
            height={50}
            width={130}
            alt='Logo'
            className='mb-7'
          />
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
    );
}