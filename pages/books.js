import Link from 'next/link'
import {getUrl} from '../lib/url'
import React from 'react'
import Books from '../components/Books'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const books = (props) => {
  console.log(props)
  return (
    <div>
        <NavBar/>
        <Books response={props["response"]}/>
        <Footer/>
    </div>
  )
}

export default books

export async function getServerSideProps(context){
  const res = await fetch(`${getUrl()}/api/getbooks`,{
    method:"POST",
    body: JSON.stringify({db:"class10"})
  })
  const data = await res.json()
  return {props:{
      "response": JSON.stringify(data)
  }}
}