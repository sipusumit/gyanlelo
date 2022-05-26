import Link from 'next/link'
import React from 'react'
import Books from '../components/Books'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const books = () => {
  return (
    <div>
        <NavBar/>
        <Books/>
        <Footer/>
    </div>
  )
}

export default books


// width: 240px;
//     height: 55px;
//     border-radius: 8px;

{/* <div className=' min-w-60 w-60 h-14 rounded-lg items-center justify-center flex border-black border-2'>
            <Link href={"/class/10/foot_print_without_feet"}><a className='px-4 py-5'>Foot Print Without Feet</a></Link>
          </div>
          <div className='min-w-60  h-14 rounded-lg items-center justify-center flex border-black border-2'>
            <Link href={"/class/10/first_flight"}><a className='px-4 py-5'>First Flight</a></Link>
          </div> */}