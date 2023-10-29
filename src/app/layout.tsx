import Footer from '@/components/Utility/Footer'
import PreLoader from '@/components/Utility/PreLoader'
import './globals.css'



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
        <PreLoader />

        {children}
        <Footer />
      </body>
    </html>
  )
}
