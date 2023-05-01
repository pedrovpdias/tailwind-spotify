import Image from "next/image";

export default function PlayerControls() {
    return (
        <div className='flex items-center gap-4'>
            <Image
                src="/image/icons/queue.svg"
                height={16}
                width={16}
                alt='Queue icon'
            />
            <Image
                src="/image/icons/device.svg"
                height={16}
                width={16}
                alt='Device icon'
            />

            <div className='flex items-center gap-2'>
                <Image
                    src="/image/icons/volume.svg"
                    height={16}
                    width={16}
                    alt='Volume icon'
                />
                <div className='h-1 rounded-full w-24 bg-zinc-800'>
                <div className='bg-zinc-500 w-20 h-1 rounded-full'></div>
                </div>
            </div>
        </div>
    );
}