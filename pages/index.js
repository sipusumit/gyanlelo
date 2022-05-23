import Head from 'next/head'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>GyanLelo</title>
        <meta name="description" content="GyanLelo | A free Ncert solutions for class 7 to 10" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      CONTENT HERE

      <Footer />
    </div>
  )
}
