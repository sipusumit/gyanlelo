import Head from 'next/head'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>GyanLelo</title>
        <meta name="description" content="GyanLelo | A free Ncert solutions for class 7 to 10" />
      </Head>
      <div>
        <NavBar/>
          Home
        <Footer/>
      </div>
    </div>
  )
}

//<iframe src="https://discord.com/widget?id=987714820239396904&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
