import Link from "next/link"

const Header: React.FC = () => {
  return (
    <header className="h-18 flex items-center bg-[#e2e8ed] px-4 md:px-4 lg:px-4 text-blue-600 w-full shadow-lg">
      <div className="flex items-center justify-between w-full">
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
         <Link href="/index" className="hover:text-[#E2D609] px-2 md:px-4 text-xl transition-colors duration-300 font-semibold">HOME</Link>
         <Link href="https://www.socomec.co.uk/en-gb/c/uninterruptible-power-supply-ups-devices" className="hover:text-[#E2D609] px-2 md:px-4 text-xl 
         transition-colors duration-300 font-semibold" target="_blank" rel="noopener noreferrer">PRODUCTS</Link>
          <Link href="/contact" className="hover:text-[#E2D609] px-2 md:px-4 text-xl transition-colors duration-300 font-semibold">CONTACT</Link>
          <Link href="/about" className="hover:text-[#E2D609] px-2 md:px-4 text-xl transition-colors duration-300 font-semibold">ABOUT</Link>
    </nav>
    
      </div>
    </header>

  )
}

export default Header