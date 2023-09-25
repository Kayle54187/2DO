import type { Metadata } from 'next'
import NavBar from '@/components/shared/nav-bar'
import Footer from '@/components/shared/footer-bar'
import StatsSection from '@/components/shared/graph/stats-section'
import '@/app/globals.css';

export const metadata: Metadata = {
  title: '2DO | Home',
  description: 'Not Your Random Task Management App',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='bg-inherit w-10/12 m-auto flex flex-col justify-around min-h-screen'>
    <div>
      <NavBar/>
    </div>
    <main className='flex-1 mt-20 mb-20 grid grid-cols-2'>
      <div>
        <StatsSection/>
      </div>
      <div>
        {children}
      </div>
    </main>
    <div>
      <Footer/>
    </div>
  </div>
  )
}
