import Image from "next/image";

export default function MainMenu() {
    const menuItens = [
        {
            title: 'Home',
            icon: '/image/icons/home.svg'
        },
        {
            title: 'Search',
            icon: '/image/icons/search.svg'
        },
        {
            title: 'Your Library',
            icon: '/image/icons/library.svg'
        },
    ]
    
    return (
        <nav className='space-y-5'>
            { menuItens && menuItens.map(item => (
                <a 
                    href='' 
                    className='
                    flex items-center gap-4 
                    text-xs font-semibold text-zinc-200 hover:text-zinc-50 hover:underline
                    '
                >
                    <Image
                    src={item.icon}
                    height={24}
                    width={24}
                    alt='Home icon' 
                    />
                    {item.title}
                </a>
            )) }

        </nav>
    );
}