import Image from 'next/image'

export default function UserButton({ user }) {
    
    /* DROPDOWN MENU
    const userButton = document.getElementById('user-button');
    const userButtonDropDown = document.getElementById('user-button-dropdown');

    useEffect(() => {
        document.addEventListener('click', e => {
            if(e.target === userButton) {
                if(userButtonDropDown) {
                    userButtonDropDown.classList.remove('invisible');
                }
            }
            else {
                if(userButtonDropDown) {
                    if(!userButtonDropDown.classList.contains('invisible')) {
                        userButtonDropDown.classList.add('invisible');
                    }
                }
            }
            console.log(userButton);
        });
    }, []);*/

    const dropdownLinks = [
        {
            title: 'Conta',
            icon: true
        },
        {
            title: 'Perfil',
            icon: false
        },
        {
            title: 'Upgrade to Premium',
            icon: true
        },
        {
            title: 'Settings',
            icon: false
        }
    ]
    
    return (
        <>
            <button 
                id="user-button"
                className="
                    flex items-center gap-3
                    bg-black hover:bg-neutral-800 p-px pr-2 rounded-full 
                    text-xs font-bold
                    relative
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

            <div
                id="user-button-dropdown"
                className='
                    absolute right-8 top-14 z-20
                    grid p-1
                    bg-neutral-800 rounded
                    text-xs font-medium
                    invisible
                '
            >
                {
                    dropdownLinks && dropdownLinks.map(item => (
                        <a
                            href=''
                            className='
                                p-3 w-56
                                hover:bg-neutral-700 rounded-sm
                                flex justify-between
                            '
                        >
                            { item.title }
                            { 
                                item.icon ? 
                                    <Image
                                        src="/image/icons/external-link.svg"
                                        width={14}
                                        height={14}
                                        alt="External-link icon"
                                    />  : '' 
                            }
                        </a>
                    ))
                }

                <hr className='border-neutral-700'></hr>

                <a
                    href=''
                    className='
                        p-3 w-56 
                        hover:bg-neutral-700 rounded-sm
                        flex justify-between
                    '
                >
                    Sair
                </a>
            </div>
        </>
    );
}