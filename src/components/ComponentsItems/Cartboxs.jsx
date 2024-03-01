import { BiPlus, BiMinus } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { EditcartItem,DeletecartItem } from '../../redux/cart/cartFunctions';
import { useContext } from 'react';
import Contexts from '../../context/Context';


function Cartboxs({ item }) {
  const contextstates = useContext(Contexts);
  const { showalert } = contextstates;
  const dispatch=useDispatch()

  const increaseQuantity=(item)=>{
    const quantity=item.quantity+1
    dispatch(EditcartItem({id:item.productId,quantity:quantity,showalert:showalert}))
  }
  
  const decreaseQuantity = (item) => {
    const newQuantity = item.quantity > 1 ? item.quantity - 1 : 0;
    if (newQuantity === 0) {
      dispatch(DeletecartItem({ id: item.productId,showalert:showalert }));
    } else {
      dispatch(EditcartItem({ id: item.productId, quantity: newQuantity, showalert: showalert }));
    }
  };
    return (
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img src={item.img} alt="Product Image" className="w-12 h-12 mr-4" />
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-gray-600">Price: ${item.price}</p>
          </div>
        </div>
        <div className="flex items-center">
          <button className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 mr-2">
            <BiMinus className="w-4 h-4 fill-current" onClick={()=>decreaseQuantity(item)} />
          </button>
          <p>{item.quantity}</p>
          <button className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 ml-2">
            <BiPlus className="w-4 h-4 fill-current" onClick={()=>increaseQuantity(item)} />
          </button>
        </div>
      </div>
    );
  }
  
  export default Cartboxs;
  