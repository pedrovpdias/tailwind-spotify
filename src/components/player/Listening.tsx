import Image from "next/image";

export default function Listening() {
    return (
        <div className='flex items-center gap-3'>
            <Image 
                src="/image/album/sonic-highways.jpg" 
                alt="Capa do album"
                height={56} 
                width={56}
            />
            <div className='flex flex-col'>
                <strong className='font-normal'>
                Something from Nothing
                </strong>
                <span className='text-sm text-zinc-400'>
                Foo Fighters
                </span>
            </div>

            <Image
                src="/image/icons/heart.svg"
                height={24}
                width={24}
                alt='Heart icon'
                className='flex p-2 w-8 h-8 ml-2 fill-zinc-400'
            />

        </div>
    );
}