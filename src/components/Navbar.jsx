import { useContext } from "react";
import {
  FaUser,
  FaHome,
  FaShoppingCart,
  FaHeart,
  FaProductHunt,
  FaDev,
  FaShippingFast,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Contexts from "../context/Context";
import { useSelector } from "react-redux";

function navbar() {
  const Context = useContext(Contexts);
  const { wishlist } = useSelector(state => state.wishlist);
  const { cartlist } = useSelector((state) => state.cart);

  const { showalert } = Context;
  return (
    <div className=" flex justify-center items-center w-full h-full border-gray border-b-[0.5px] ">
      <nav className="flex justify-between items-center w-[80%]">
        <Link to="/"><div
          id="logo"
          className=" text-xl md:text-2xl font-semibold"
          onClick={() => showalert("This is app logo", true, true)}
        >
          <FaShippingFast fontSize={50} />
        </div></Link>
        <div id="nav-items" className=" w-[60%] text-[12px] md:text-sm">
          <ul className=" flex justify-evenly flex-row list-none">
            <Link to="/">
              <FaHome fontSize={15} />
            </Link>
            <Link to="/profile">
              <FaUser fontSize={15} />
            </Link>
            <Link to="/products">
              <FaProductHunt fontSize={15} />
            </Link>
            <Link to="/contect">
              <FaDev fontSize={15} />
            </Link>
            <div className="relative inline-block">
              <Link to="/wishlist">
                <FaHeart fontSize={15} />
              </Link>
              <span className="absolute bottom-3 left-3 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                {wishlist.length}
              </span>
            </div>
            <div className="relative inline-block">
              <Link to="/cart">
                <FaShoppingCart fontSize={15} />
              </Link>
              <span className="absolute bottom-3 left-3 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                {cartlist.length}
              </span>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
