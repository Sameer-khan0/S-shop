import { useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTocart } from "../../redux/cart/cartFunctions";
import { addTowishlist } from "../../redux/wishlist/wishlistFunctions"; 
import { useContext } from "react";
import Contexts from "../../context/Context";

function AllProductBox({ product, index}) {
  const contextstates = useContext(Contexts);
  const { showalert } = contextstates;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Addtocart = (product) => {
    dispatch(addTocart({ product: product, showalert: showalert }));
  };
  
  const Addtowishlist = (product) => {
    dispatch(addTowishlist({ product: product, showalert: showalert }));
  };

  const handleClick = () => {
    navigate("/product", { state: { product: product } });
  };

  return (
    <div
      key={index}
      className=" relative bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="absolute top-2 right-2 flex justify-end space-x-2">
        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center"
          onClick={() => Addtowishlist(product)}
        >
          <FaHeart className="text-white" />
        </div>
        <div
          className="w-8 h-8 rounded-full bg-black flex items-center justify-center"
          onClick={() => Addtocart(product)}
        >
          <FaShoppingBag className="text-white" />
        </div>
      </div>
      <img
        onClick={handleClick}
        src={product.img}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
        <p className="font-semibold text-green-500">
          ${product.price}
        </p>
      </div>
    </div>
  );
}

export default AllProductBox; // Capitalize component name
