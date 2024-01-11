import React from 'react'
import Link from '../../../node_modules/next/link'

const ContactUs = () => {
    return (
        <section id="experience" className=' px-5   flex-col flex gap-10 py-16 w-full' >
            <div className="container m-auto flex   flex-col gap-10 bg-grey-50 " >
                <h2 className='text-2xl md:text-4xl font-bold pColor ' >Contact Us</h2>
                <div className='  flex gap-5 ' >
                    <Link href="https://www.linkedin.com/in/gaurav-n-503716204/" >
                        <img className='w-5' src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" />
                    </Link>

                    <Link href="https://www.instagram.com/its_gvrv">
                        <img className='w-5' src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" />
                    </Link>

                    <Link href="https://github.com/gvrv03">
                        <img className='w-5' src="https://pngimg.com/d/github_PNG58.png" />
                    </Link>


                </div>
            </div>
        </section>
    )
}

export default ContactUs
