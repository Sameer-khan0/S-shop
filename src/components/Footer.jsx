import { Link, useNavigate } from "react-router-dom";
import { FaFacebook,FaWhatsapp,FaInstagram,FaTwitter } from "react-icons/fa";

function Footer() {
  const navigate=useNavigate()

  const handelLogout=()=>{
    localStorage.clear()
    navigate("/auth")
  }

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between p-7">
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <a href="#" className="text-lg font-bold">S-shop</a>
          <p className="mt-2 text-gray-400">Your one-stop shop for all your needs</p>
        </div>
        
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="text-lg font-bold mb-4 text-yellow-500">Quick Links</h3>
          <ul>
           <Link to="/"><li className="hover:text-gray-400" >Home</li></Link> 
           <Link to="/products"><li className="hover:text-gray-400" >Shop products</li></Link>
           <Link to="/contect"><li className="hover:text-gray-400" >Contact</li></Link>
           <Link to="/cart"><li className="hover:text-gray-400" >Your cart</li></Link>
           <Link to="/wishlist" className="hover:text-gray-400" ><li>your wishlist</li></Link>
           <Link to="/wishlist" className="hover:text-gray-400" onClick={handelLogout} ><li>Logout</li></Link>
          </ul>
        </div>
        
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="text-lg font-bold mb-4 text-yellow-500">Follow Us</h3>
          <ul className="flex space-x-4">
            <li><i className="hover:text-gray-400" >
              <FaFacebook/>
              </i></li>
            <li><i className="hover:text-gray-400" >
              <FaWhatsapp/>
              </i></li>
            <li><i className="hover:text-gray-400" >
              <FaInstagram/>
              </i></li>
            <li><i className="hover:text-gray-400" >
              <FaTwitter />
              </i></li>
           </ul>
        </div>
        
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="text-lg font-bold mb-4 text-yellow-500">Contact Us</h3>
          <p className="text-gray-400">Email: info@s-shop.com</p>
          <p className="text-gray-400">Phone: +123456789</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
