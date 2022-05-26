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
  // if(!data.success){
  //   return{
  //     notFound: true
  //   }
  // }
  return {props:{
      "response": data
  }}
}



const Book = (props) => {
  return (
    <div>
      <NavBar/>
      {
        props["response"].message.map(function(e,index){
          let data = e.data
          console.log(e);
          let comp = []
          for(var key in data){
            comp.push(<div>
              <div className="font-semibold px-4" >{key}</div>
              {
                data[key].map(d => (
                  <div key={key}>
                    <div className="px-6 py-2 font-light"><span className="font-medium">Q.{d.QNo} </span>{d.Q}</div>
                    <div className="px-6 py-2 font-light"><span className="font-medium">Ans. </span>{d.Ans}</div>
                  </div>
                ))
              }
            </div>)
          }
          return comp
        })
      }
      <Footer/>
    </div>
  )
}

export default Book


// return data[key].map(function(d,i){
  // return (
  //   <div key={key}>
  //     <div className="px-4 py-4">{`Q ${d.QNo}` + d.Q}</div>
  //     <div className="px-4 py-4">{"Ans " + d.Ans}</div>
  //   </div>
  // )
// })