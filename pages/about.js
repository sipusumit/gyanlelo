import Head from 'next/head'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const About = () => {
  return (
    <div>
      <Head>
      <title>GyanLelo | About</title>
        <meta name="description" content="GyanLelo | A free Ncert solutions for class 7 to 10" />
      </Head>
      <NavBar/>
      <p className='px-4'>About Page</p>
      <Footer/>
    </div>
  )
}

export default About