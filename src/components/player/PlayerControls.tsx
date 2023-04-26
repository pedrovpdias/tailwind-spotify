import Image from "next/image";

export default function PlayerControls() {
    return (
        <div className='flex items-center gap-4'>
            <Image
                src="/image/icons/lyrics.svg"
                height={20}
                width={20}
                alt='Lyrics icon'
            />
            <Image
                src="/image/icons/queue.svg"
                height={20}
                width={20}
                alt='Queue icon'
            />
            <Image
                src="/image/icons/device.svg"
                height={20}
                width={20}
                alt='Device icon'
            />

            <div className='flex items-center gap-2'>
                <Image
                    src="/image/icons/volume.svg"
                    height={20}
                    width={20}
                    alt='Volume icon'
                />
                <div className='h-1 rounded-full w-24 bg-zinc-600'>
                <div className='bg-zinc-200 w-20 h-1 rounded-full'></div>
                </div>
            </div>
            <Image
                src="/image/icons/maximize.svg"
                height={20}
                width={20}
                alt='Maximize icon'
            />
        </div>
    );
}