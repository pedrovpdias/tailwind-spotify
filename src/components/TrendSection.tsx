import Image from 'next/image';
import PlaylistCard from './PlaylistCard';
import SectionTitle from './SectionTitle';

export default function TrendSection() {
    const trending = [
        {
            thumbnail: '/image/trend/region_global_default.jpg',
            title: 'Top songs – World',
            description: 'World: Your weekly update of the most played tracks right now – Global'
        },
        {
            thumbnail: '/image/trend/region_br_default.jpg',
            title: 'Top songs – Brazil',
            description: 'Brazil: Your weekly update of the most played tracks right now – Brazil'
        },
        {
            thumbnail: '/image/trend/region_global_viral.jpg',
            title: 'Viral 50 – World',
            description: 'Your daily update of the most viral tracks right now – Global'
        },
        {
            thumbnail: '/image/trend/region_br_viral.jpg',
            title: 'Viral 50 – Brazil',
            description: 'Your daily update of the most viral tracks right now – Brazil'
        }
    ]
    
    return (
        <section>
            <SectionTitle title="Featured Charts" />

            <div className='grid grid-cols-8 gap-4 mt-4 w-fit'>
                { trending && trending.map(topic => (
                    <PlaylistCard 
                        thumbnail={topic.thumbnail}
                        title={topic.title}
                        description={topic.description}
                        key={topic.title}
                    />
                )) }
            </div>
        </section>
    );
}