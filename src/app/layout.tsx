import Footer from '@/components/Utility/Footer'
import PreLoader from '@/components/Utility/PreLoader'
import './globals.css'
import Navbar from "@/components/Utility/Navbar"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
      </head>
      <body className='CSSPattern text-base md:text-xl'  >
        {/* <PreLoader />       */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
