import Image from 'next/image';

import MainMenu from './navbar/MainMenu';
import UserSongsMenu from './navbar/UserSongsMenu';
import PlaylistsList from './navbar/PlaylistsList';

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
            className='mb-8'
          />
          
          <MainMenu />

          <UserSongsMenu />

          <PlaylistsList />

        </aside>
    );
}