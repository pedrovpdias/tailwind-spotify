import Sidebar from '@/components/Sidebar';
import MainHeader from '@/components/HomeHeader';
import Playlists from '@/components/Playlists';
import DailyMix from '@/components/DailyMix';
import Footer from '@/components/Footer';

import { GetServerSideProps } from 'next';

export default function Home(props) {
  console.log("MESSAGE:", props);
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main 
          className="
            flex-1
            p-6 relative

            before:absolute before:-z-20 before:left-0 before:top-0
            before:flex before:w-full before:h-96
            before:bg-gradient-to-b before:from-green-900 before:to-transparent
            before:opacity-0 
            
            before:transition-opacity
            before:duration-500
            [&:has(.album-player:hover)]:before:opacity-100
          "
        >
          <MainHeader />

          <Playlists />

          <DailyMix />

        </main>
      </div>

      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { message: `Next.js is awesome` }, // will be passed to the page component as props
  }
}