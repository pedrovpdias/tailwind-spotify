import Image from "next/image";

export default function UserSongsMenu() {
    return (
        <nav className='flex flex-col mt-9 gap-4'>
            <a 
              href=""
              className='
                flex items-center gap-3 
                text-xs font-semibold hover:text-zinc-50 hover:underline
              '
            >
              <div className='
                flex items-center justify-center h-6 w-6 p-1
                bg-zinc-200 rounded-sm'
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
                text-xs font-semibold hover:text-zinc-50 hover:underline
              '
            >
              <div className='
                flex items-center justify-center h-6 w-6 p-1
                rounded-sm bg-gradient-to-br from-indigo-800 to-zinc-400
                '
              >
                <Image
                  src="/image/icons/heart-fill.svg"
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