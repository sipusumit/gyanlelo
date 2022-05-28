import Link from "next/link"

// export async function getServerSideProps(context){
//     const res = await fetch('http://localhost:3000/api/getbooks', {
//         method: 'POST',
//         body: JSON.stringify({book: "class10"})
//     })
//     const data = res.json()
//     console.log(res)
//     return {props:{
//         "response": data
//     }}
// }

const Books = ({response}) => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-col text-center w-full mb-4">
                        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">Books For Class 10</h1>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        {
                            JSON.parse(response).message.map((e,i)=>(
                                <div key={i} className="p-2 lg:w-1/3 md:w-1/2 w-full cursor-pointer">
                                <Link href={e.url}>
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 title-font font-medium">{e.name}</h2>
                                            <p className="text-gray-500">{e.publication}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Books