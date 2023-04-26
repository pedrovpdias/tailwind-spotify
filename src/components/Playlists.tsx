import { GetServerSideProps } from "next";
import PlaylistPlayer from "./PlaylistPlayer";

export default function Playlists( { albums } ) {
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
                    />
                )) }

            </div>

            <ul>
                { albums && albums.map(album => (<li key={album.id}>ok</li>))}
            </ul>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch(`${process.env.BASE_URL}api/album`);
    const data = await  response.json();

    return {
        props: {
            albums: data
        }
    }
}