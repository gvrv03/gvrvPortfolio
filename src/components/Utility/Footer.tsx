import React from 'react'
import Link from '../../../node_modules/next/link'

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container py-8 mx-auto flex  justify-center items-center sm:flex-row flex-col">

                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">Coded with ❤️with <Link href='/' >@gvrv_n</Link>

                </p>

            </div>
        </footer>
    )
}

export default Footer
