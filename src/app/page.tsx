import Sidebar from '@/components/Sidebar';
import MainHeader from '@/components/HomeHeader';
import Albums from '@/components/Albums';
import DailyMix from '@/components/DailyMix';
import Footer from '@/components/Footer';
import TrendSection from '@/components/TrendSection';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main 
          className="
            flex-1
            py-4 px-8 relative
            ml-60 mb-20

            before:absolute before:-z-20 before:left-0 before:top-0
            before:flex before:w-full before:h-96
            before:bg-gradient-to-b before:from-emerald-300/20 before:to-transparent
            
            before:transition-opacity before:opacity-100
            before:duration-500
            [&:has(.album-player:hover)]:before:opacity-0

            after:absolute after:-z-20 after:left-0 after:top-0
            after:flex after:w-full after:h-96
            after:bg-gradient-to-b after:from-neutral-100/20 after:to-transparent
            
            after:transition-opacity after:opacity-0
            after:duration-500
            [&:has(.album-player:hover)]:after:opacity-100
          "
        >
          <MainHeader />

          {/*@ts-expect-error Async Server Component*/}
          <Albums />

          <DailyMix />

          <TrendSection />

        </main>
      </div>
      
      <Footer />
    </div>
  )
}