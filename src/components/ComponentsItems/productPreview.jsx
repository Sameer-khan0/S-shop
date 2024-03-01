import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { addTocart } from "../../redux/cart/cartFunctions";
import { addTowishlist } from "../../redux/wishlist/wishlistFunctions";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import Context from "../../context/Context";

const ProductPreview = () => {
  const context = useContext(Context);
  const { showalert } = context;
  const location = useLocation();
  const dispatch = useDispatch();
  const product = location.state ? location.state.product : null;

  if (!product) {
    return <div>No product data found</div>;
  }

  const Addtocart = (product) => {
    dispatch(addTocart({ product: product, showalert: showalert }));
  };

  const handleAddToWishlist = (product) => {
    dispatch(addTowishlist({ product: product, showalert: showalert }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="h-full md:w-[70%] product-preview bg-white rounded-md flex-col md:flex-row shadow-lg p-4 flex overflow-scroll"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <div className="w-full md:w-[30rem] mr-4 flex-none h-[50%] md:h-full">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="flex-grow flex flex-col justify-between">
        <div className=" h-[80%] flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
          <p className="mb-4 text-orange-500 font-bold">${product.price}</p>
          <h3 className="text-lg mb-2">{product.category}</h3>
          <p className="text-gray-600 mb-4 text-justify">
            {product.description}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={() => Addtocart(product)}
            className="mr-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            <FaShoppingCart className="inline-block mr-2" /> Add to Cart
          </button>
          <button
            onClick={() => handleAddToWishlist(product)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            <FaHeart className="inline-block mr-2" /> Add to Wishlist
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductPreview;
