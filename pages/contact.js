import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Head from 'next/head'

const Contact = () => {
  return (
    <div>
      <Head>
      <title>GyanLelo | Contact Us</title>
        <meta name="description" content="GyanLelo | A free Ncert solutions for class 7 to 10" />
      </Head>
      <NavBar/>
      <p className='px-4'>Contact Page</p>
      <Footer/>
    </div>
  )
}

export default Contact