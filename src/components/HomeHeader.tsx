import Image from "next/image";

import UserButton from "./UserButton";

export default function HomeHeader() {
    return (
        <header className="flex justify-between items-center fixed top-0 right-0 left-60 px-8 py-4 bg-neutral-900/0">
            <div className='flex items-center gap-2'>
                <button className='rounded-full bg-black p-1 w-8 h-8 hover:bg-neutral-600'>
                <Image
                    src="/image/icons/chevron-left.svg"
                    height={20}
                    width={20}
                    alt='Chevron-left icon'
                    className="opacity-80"
                />
                </button>
                <button className='rounded-full bg-black p-1 w-8 h-8 hover:bg-neutral-600'>
                <Image
                    src="/image/icons/chevron-right.svg"
                    height={20}
                    width={20}
                    alt='Chevron-right icon'
                    className="ml-1 opacity-80"
                />
                </button>
            </div>

            <UserButton user="Pedro" />
        </header>
    );
}