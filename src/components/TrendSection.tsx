import Image from 'next/image';
import PlaylistCard from './PlaylistCard';
import SectionTitle from './SectionTitle';

export default function TrendSection() {
    const trending = [
        {
            thumbnail: '/image/trend/region_global_default.jpg',
            title: 'Daily Mix 6',
            description: 'Mundo: seu relatório semanal das faixas mais tocadas no momento'
        },
        {
            thumbnail: '/image/trend/region_br_default.jpg',
            title: 'Daily Mix 6',
            description: 'Brazil: seu relatório semanal das faixas mais tocadas no momento'
        },
        {
            thumbnail: '/image/trend/region_global_viral.jpg',
            title: 'Daily Mix 6',
            description: 'Mundo: seu relatório diário das faixas mais tocadas no momento'
        },
        {
            thumbnail: '/image/trend/region_br_viral.jpg',
            title: 'Daily Mix 6',
            description: 'Brazil: seu relatório diário das faixas mais tocadas no momento'
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
                    />
                )) }
            </div>
        </section>
    );
}