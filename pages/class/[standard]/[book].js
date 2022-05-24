export async function getServerSideProps(context){
  const book = context.params.book;
  const standard = parseInt(context.params.standard);
  if(isNaN(standard)){
      return {notFound: true}
  }
  return {props:{
      "class": standard,
      "book": book,
  }}
}



const Book = (props) => {
  return (
    <div>Book: {props["book"]}  Class: {props["class"]}</div>
  )
}

export default Book