import Image from 'next/image';

import MainMenu from './navbar/MainMenu';
import UserSongsMenu from './navbar/UserSongsMenu';
import Playlists from './navbar/Playlists';

export default function Sidebar() {
    return (
        <aside 
          className="
            w-60 p-6 pb-2
            bg-black
            flex flex-col
            fixed top-0 left-0 bottom-20
          "
        >
          <Image 
            src='/image/logo.png'
            height={50}
            width={130}
            alt='Logo'
            className='mb-8'
          />
          
          <MainMenu active="home" />

          <UserSongsMenu />

          <Playlists />

          <button 
            className='
              flex mt-auto mb-0 items-center gap-4 
              text-xs font-bold text-neutral-400 hover:text-white 
              group transition-colors duration-300 
            '
          >
            <Image 
              src='/image/icons/download.svg'
              height={24}
              width={24}
              alt='Download icon'
              className='group-hover:brightness-200 transition duration-300 '
            />
            Install app
          </button>

        </aside>
    );
}