import Image from "next/image"
import Link from "next/link"

const Books = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-col text-center w-full mb-4">
                        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">Books For Class 10</h1>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full cursor-pointer">
                            <Link href={"/class/10/foot_print_without_feet"}>
                                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 title-font font-medium">Foot Print without Feet</h2>
                                        <p className="text-gray-500">NCERT</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">First Flight</h2>
                                    <p className="text-gray-500">NCERT</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Maths</h2>
                                    <p className="text-gray-500">RS Agarwal</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Maths</h2>
                                    <p className="text-gray-500">NCERT</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Physics</h2>
                                    <p className="text-gray-500">NCERT</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">

                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Chemestry</h2>
                                    <p className="text-gray-500">NCERT</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">

                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Biology</h2>
                                    <p className="text-gray-500">NCERT</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">

                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Hindi Kshitiz</h2>
                                    <p className="text-gray-500">NCERT</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">

                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Hindi Kritika</h2>
                                    <p className="text-gray-500">NCERT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Books