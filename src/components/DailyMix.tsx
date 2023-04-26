import DailyMixCard from "./DailyMixCard";

export default function DailyMix() {
    const dailyMixes = [
        {
            thumbnail: '/image/daily/dailymix-1.jpg',
            title: 'Daily Mix 1',
            description: 'Metallica, AC/DC, Slipknot and more'
        },
        {
            thumbnail: '/image/daily/dailymix-2.jpg',
            title: 'Daily Mix 2',
            description: 'Foo Fighters, Green Day, Paramore and more'
        },
        {
            thumbnail: '/image/daily/dailymix-3.jpg',
            title: 'Daily Mix 3',
            description: 'Eminem, Jay-Z, Drake and more'
        },
        {
            thumbnail: '/image/daily/dailymix-4.jpg',
            title: 'Daily Mix 4',
            description: 'John Mayer, Jason Mraz, Jack Johnson and more'
        },
        {
            thumbnail: '/image/daily/dailymix-5.jpg',
            title: 'Daily Mix 5',
            description: 'Matuê, WIU, Bin and more'
        }
    ]

    return (
        <>
            <h2 className='font-semibold text-2xl mt-10'>
                Made for Pedro Dias
            </h2>
            
            <div className='grid grid-cols-8 gap-4 mt-4'>
                { dailyMixes && dailyMixes.map(dailyMix => (
                    <DailyMixCard 
                        thumbnail={dailyMix.thumbnail}
                        title={dailyMix.title}
                        description={dailyMix.description}
                    />
                )) }
            </div>
        </>
    );
}