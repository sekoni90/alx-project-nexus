import Link from "next/link"

const HeaderAction: React.FC = () => {
  return (
    <header className="h-18 flex items-center bg-[#e2e8ed] p-4 text-blue-600 w-full shadow-lg mb-6">
      <div className="flex items-center justify-between w-full">
        <nav className="flex flex-1 justify-center space-x-4 md:space-x-8">
          <Link href="/" className="hover:text-[#E2D609] px-2 md:px-4 text-lg md:text-xl transition-colors duration-300 font-semibold">
            HOME
          </Link>
          <Link href="/shop" className="hover:text-[#E2D609] px-2 md:px-4 text-lg md:text-xl transition-colors duration-300 font-semibold">
            PRODUCTS
          </Link>
          <Link href="/cart" className="hover:text-[#E2D609] px-2 md:px-4 text-lg md:text-xl transition-colors duration-300 font-semibold">
            CART
          </Link>
          <Link href="/about" className="hover:text-[#E2D609] px-2 md:px-4 text-lg md:text-xl transition-colors duration-300 font-semibold">
            ABOUT
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default HeaderAction