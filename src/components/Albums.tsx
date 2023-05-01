import AlbumPlayer from "./AlbumPlayer";
import SectionTitle from "./SectionTitle";

export default async function Playlists() {
    const response = await fetch(`${process.env.BASE_URL}api/album`, {
        cache: 'no-store'
    });
    const data = await response.json();
    const albums = await data.albums;

    return (
        <section className="mt-8">
            <SectionTitle title="Good afternoon" show={true} />
            
            <div className='grid grid-cols-3 gap-4 mt-4 z-20'>
                { albums && albums.map(album => (
                    <AlbumPlayer 
                        thumbnail={`${album.images[1].url}`}
                        title={album.name}
                        key={album.id}
                    />
                )) }

            </div>
        </section>
    );
}