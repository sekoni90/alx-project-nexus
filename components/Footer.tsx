import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-blue-600 p-4 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        {/* Footer Logo */}
        <h2 className="text-xl md:text-4xl font-semibold mb-4 md:mb-0">
         AJOCKS STORE  </h2>
<nav className="flex-1 flex justify-center space-x-6 mb-4 md:mb-0">
          <Link href="/" className="hover:text-[#E2D609] text-lg transition-colors duration-300">Home</Link>
          <Link href="https://www.socomec.co.uk/en-gb/terms-conditions-use" className="hover:text-[#E2D609] text-lg transition-colors duration-300">Terms & Conditions</Link>
          <Link href="/contact" className="hover:text-[#E2D609] text-lg transition-colors duration-300">Contact</Link>
          <Link href="https://www.socomec.co.uk/en-gb/privacy-policy" className="hover:text-[#E2D609] text-lg transition-colors duration-300">Privacy Policy</Link>
        </nav>

        <div className="flex space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter" className="hover:text-[#E2D609]">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook" className="hover:text-[#E2D609]">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram" className="hover:text-[#E2D609]">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>

      <div className="mt-2 text-center text-sm text-white">
        <p>&copy; 2025 ajocks store. All rights reserved.</p>
      </div>
    </footer>

  );
};

export default Footer;
