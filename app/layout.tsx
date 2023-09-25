import '@/app/globals.css';
import { ClerkProvider } from '@clerk/nextjs';


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className='bg-[#1A1A1A]'>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
