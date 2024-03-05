import Navbar from "../components/Navbar.jsx";
import Slider from "../components/Slider.jsx";
import Topproduct from "../components/Topproduct.jsx"
import Footer from "../components/Footer.jsx"
import Banner1 from "../assets/banner1.jpg";
import Banner2 from "../assets/banner2.jpg";
import Banner3 from "../assets/banner3.jpg";
import Banner4 from "../assets/banner4.jpg";
import Catagory from "../components/Catagory.jsx";
import shoes from "../assets/shoes.jpg"
import tools from "../assets/tools.jpg"
import cosmetics from "../assets/cosmatics.jpg"
import mobileItems from "../assets/mobileitems.jpg"
import clothes from "../assets/clothes.jpg"
import electronics from "../assets/electronic.jpg"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../redux/products/productFunctions.js";
import { fetchCart } from "../redux/cart/cartFunctions.js";
import { fetchWishlist } from "../redux/wishlist/wishlistFunctions.js";
import { useNavigate } from "react-router-dom";

function Hompage() {
  const images = [Banner1,Banner2,Banner3,Banner4];
  const dispatch=useDispatch()
  const navigate=useNavigate()

  useEffect(() => {
    localStorage.getItem('token') ? navigate('/') : navigate('/auth'); 
  }, []);

  const { list } = useSelector(state => state.products);
  const { wishlist } = useSelector(state => state.wishlist);
  const topProduct = Array.isArray(list) ? list.slice(0, 8) : [];
  
  const Catagoryitems = [
    {
      image: shoes,
      description: "Shop the latest shoes collection for men and women.",
      name: "Shoes",
      background: "#ff7900"
    },
    {
      image: tools,
      description: "Discover a wide range of high-quality tools for your projects.",
      name: "Tools",
      background: "#ffc000"
    },
    {
      image: cosmetics,
      description: "Explore our collection of cosmetics and skincare products.",
      name: "Cosmatics",
      background: "#00c0ff"
    },
    {
      image: clothes,
      description: "Find fashionable clothes for all occasions.",
      name: "Clothes",
      background: "gray"
    },
    {
      image: mobileItems,
      description: "Browse through our selection of mobile phones and accessories.",
      name: "TV/Monitors",
      background: "#ff5757" 
    },
    {
      image: electronics,
      description: "Discover the latest gadgets and electronics at great prices.",
      name: "Electronics",
      background: "orange"
    }
  ];
  
  useEffect(()=>{
    dispatch(fetchCart())
    dispatch(fetchWishlist())
    dispatch(fetchProducts())
  },[dispatch])

  return (
    <div className=" w-[95%] h-[95%] bg-white p-[2%] overflow-scroll "> 
      <div id="header" className=" h-[10%]">
        <Navbar />
      </div>
      <div className=" h-[35%] md:h-[90%]">
        <Slider images={images} />
      </div>
      <div className="h-[100%]">
        <Catagory Catagoryitems={Catagoryitems} />
      </div>
      <div className="h-[100%]">
       {topProduct.length>0? <Topproduct items={topProduct} /> : <h2 className=" text-center">Products not found</h2>}
      </div>
      <div className="h-[45%]"> 
       <Footer/>
      </div>
    </div>
  );
}

export default Hompage;
