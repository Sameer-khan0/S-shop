import { FaShoppingBag, FaTrash } from 'react-icons/fa';
import {useDispatch} from 'react-redux'
import { DeleteWishlisitem } from "../redux/wishlist/wishlistFunctions"
import Context from "../context/Context"
import {useContext} from 'react'
import { addTocart } from '../redux/cart/cartFunctions';

const WishlistItem = ({ item }) => {
  const {showalert} = useContext(Context)
  const dispatch=useDispatch()
  
  const handelDelete=(productid,item)=>{
    dispatch(DeleteWishlisitem({id:productid,objectId:item,showalert:showalert}))
  }

  const handelAddtocart = (product) => {
    dispatch(addTocart({ product: product, showalert: showalert }));
  };
  
  
  return (
    <div className="wishlist-item flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4" >
      <img src={item.productId.img} alt={item.productId.name}className="w-32 h-32 object-cover rounded-full mb-4" />
      <div className="text-center">
        <h3 className="text-lg font-semibold">{item.productId.name}</h3>
        <p className="text-gray-600">${item.productId.price}</p>
      </div>
      <div className="mt-4 flex items-center">
        <button onClick={() => handelDelete(item.productId._id,item._id)} className="bg-red-500 text-white px-4 py-2 rounded-full mr-2">
          <FaTrash className="text-xl" />
        </button>
        <button onClick={()=>handelAddtocart(item.productId)} className="bg-red-500 text-white px-4 py-2 rounded-full">
          <FaShoppingBag className="text-xl" />
        </button>
      </div>
    </div>
  );
};

const Wishlist = ({ items }) => {
  return (
    <div className="wishlist-container container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {items.map((item, index) => (
        <WishlistItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Wishlist;
