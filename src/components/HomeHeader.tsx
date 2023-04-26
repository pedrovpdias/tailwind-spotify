import Image from "next/image";

export default function HomeHeader() {
    return (
        <header className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <Image
                  src="/image/icons/chevron-left.svg"
                  height={24}
                  width={24}
                  alt='Chevron-left icon'
              />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <Image
                  src="/image/icons/chevron-right.svg"
                  height={24}
                  width={24}
                  alt='Chevron-right icon'
              />
            </button>
        </header>
    );
}