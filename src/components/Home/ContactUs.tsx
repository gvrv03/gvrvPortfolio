import React from 'react'
import Link from '../../../node_modules/next/link'

const ContactUs = () => {
    return (
        <section id="experience" className=' px-5   flex-col flex gap-10 py-16 w-full' >
            <div className="container m-auto flex   flex-col gap-10 bg-grey-50 " >
                <h2 className='text-2xl md:text-4xl font-bold pColor ' >Contact Us</h2>
                <div className='  flex gap-5 ' >
                    <Link href="https://www.linkedin.com/in/gaurav-n-503716204/" >
                        <i className='uil  text-xl uil-linkedin' />
                    </Link>

                    <Link href="https://www.instagram.com/its_gvrv">
                        <i className='uil  text-xl uil-instagram' />
                    </Link>

                    <Link href="mailto:gauravnarnaware3112003@gmail.com">
                        <i className='uil  text-xl uil-envelope-minus' />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ContactUs
