import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";
import getUrl from "../../../lib/url";

export async function getServerSideProps(context){
  const book = context.params.book;
  const standard = parseInt(context.params.standard);
  if(isNaN(standard) || !/^\d+$/.test(context.params.standard)){
      return {notFound: true}
  }

  let response = await fetch(`${getUrl()}/api/${standard}/${book}`)
  let data = await response.json()
  if(!data.success){
    return{
      notFound: true
    }
  }
  return {props:{
      "response": data
  }}
}



const Book = (props) => {
  return (
    <div>
      <NavBar/>
      <div>Res: {JSON.stringify(props["response"])}</div>
      <Footer/>
    </div>
  )
}

export default Book