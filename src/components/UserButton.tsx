import Image from 'next/image'

export default function UserButton({ user }) {
    return (
        <button 
            className="
                flex items-center gap-3
                bg-black hover:bg-neutral-700 p-px pr-2 rounded-full 
                text-xs font-bold
            "
        >
            <div className="fill-neutral-200 rounded-full p-0.5 bg-neutral-600 w-7 h-7 p-1 grid place-content-center">
                <Image 
                    src="/image/icons/person.svg"
                    height={12}
                    width={12}
                    alt="Person icon"
                    className="w-4 h-auto"
                />
            </div>
            {user}
            <Image 
                src="/image/icons/chevron-down.svg"
                height={12}
                width={12}
                alt="Person icon"
            />
        </button>
    );
}