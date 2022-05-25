import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const books = () => {
  return (
    <div>
        <NavBar/>
        <Link href={"/class/10/foot_print_without_feet"}><a className='px-4 py-5'>foot print without feet</a></Link>
        <Footer/>
    </div>
  )
}

export default books