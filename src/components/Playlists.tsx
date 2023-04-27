import PlaylistPlayer from "./PlaylistPlayer";

export default function Playlists() {
    const playlists = [
        {
            thumbnail: '/image/album/wasting-light.jpg',
            title: 'Wasting Light',
        },
        {
            thumbnail: '/image/album/born-n-raised.jpg',
            title: 'Born And Raised',
        },
        {
            thumbnail: '/image/album/paradise-valley.jpg',
            title: 'Paradise Valley',
        },
        {
            thumbnail: '/image/album/sonic-highways.jpg',
            title: 'Sonic Highways',
        },
        {
            thumbnail: '/image/album/metallica.jpg',
            title: 'Metallica',
        },
        {
            thumbnail: '/image/album/brand-new-eyes.jpg',
            title: 'Brand New Eyes',
        }
    ];

    return (
        <>
            <h1 className='font-semibold text-3xl mt-10'>
                Good Afternoon
            </h1>
            
            <div className='grid grid-cols-3 gap-4 mt-4 z-20'>
                { playlists && playlists.map(playlist => (
                    <PlaylistPlayer 
                        thumbnail={playlist.thumbnail}
                        title={playlist.title}
                        key={playlist.title}
                    />
                )) }

            </div>
        </>
    );
}