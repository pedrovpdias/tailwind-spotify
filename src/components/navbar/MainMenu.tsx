import Image from "next/image";

export default function MainMenu({ active }) {
    const menuItens = [
        {
            id: 'home',
            title: 'Home',
            icon: (active === "home") ? '/image/icons/home-a.svg' : '/image/icons/home.svg'
        },
        {
            id: 'search',
            title: 'Search',
            icon: '/image/icons/search.svg'
        },
        {
            id: 'library',
            title: 'Your Library',
            icon: '/image/icons/library.svg'
        },
    ];

    const link = 'flex items-center gap-4 text-xs font-semibold text-neutral-400 hover:brightness-200 transition-all duration-300';
    const linkActive = 'flex items-center gap-4 text-xs font-semibold text-white hover:text-white';
    
    return (
        <nav className='space-y-5'>
            { menuItens && menuItens.map(item => (
                <a 
                    href='' 
                    className={ (active === item.id) ? linkActive : link}
                    key={item.id}
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