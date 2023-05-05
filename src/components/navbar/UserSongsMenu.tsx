import Image from "next/image";

export default function UserSongsMenu() {
    return (
        <nav className='flex flex-col mt-9 gap-4'>
            <a 
              href=""
              className='
                flex items-center gap-3 
                text-xs font-semibold text-neutral-400 hover:text-white transition-color duration-300 group
              '
            >
              <div className='
                flex items-center justify-center h-6 w-6 p-1
                rounded-sm bg-neutral-400 group-hover:bg-white transition-color duration-300'
              >
                <Image
                  src="/image/icons/plus.svg"
                  height={24}
                  width={24}
                  alt='Plus icon'
                  className='w-3 h-3'
                />
              </div>
              Create playlist
            </a>
            
            <a 
              href=""
              className='
                flex items-center gap-3 
                text-xs font-semibold text-neutral-400 hover:text-white transition-color duration-300 group
              '
            >
              <div className='
                flex items-center justify-center h-6 w-6 p-1
                rounded-sm bg-gradient-to-br from-indigo-800 to-neutral-400 group-hover:brightness-150 transition-all duration-300
                '
              >
                <Image
                  src="/image/icons/heart-a.svg"
                  height={24}
                  width={24}
                  alt='Plus icon'
                  className='w-3 h-3'
                />
              </div>
              Liked Songs
            </a>
        </nav>
    );
}