import Link from "next/link"

const NavBar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-between items-center py-2">
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">GyanLelo</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href={"/"}>
        <a className="mr-5 hover:text-gray-900">Home</a>
      </Link>
      <Link href={"/books"}>
        <a className="mr-5 hover:text-gray-900">Books</a>
      </Link>
      <Link href={"/about"}>
        <a className="mr-5 hover:text-gray-900">About Us</a>
      </Link>
      <Link href={"/contact"}>
        <a className="mr-5 hover:text-gray-900">Contact Us</a>
      </Link>
    </nav>
  </div>
</header>
    </div>
  )
}

export default NavBar
