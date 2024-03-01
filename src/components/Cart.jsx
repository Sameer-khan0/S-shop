import {useSelector} from "react-redux";

import Cartboxs from "./ComponentsItems/Cartboxs";

const Cart = () => {
    const { cartlist } = useSelector(state => state.cart);

    const cartItems = [
        { id: 1, name: "Product 1", price: 10, quantity: 2 },
        { id: 2, name: "Product 2", price: 15, quantity: 1 },
        { id: 2, name: "Product 2", price: 15, quantity: 1 },
        { id: 2, name: "Product 2", price: 15, quantity: 1 },
        { id: 2, name: "Product 2", price: 15, quantity: 1 },
        { id: 2, name: "Product 2", price: 15, quantity: 1 },
        { id: 2, name: "Product 2", price: 15, quantity: 1 },
        // Add more dummy data as needed
    ];

    const totalAmount = cartlist.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className="text-sm md:text-lg p-4 md:w-[80%] flex justify-between flex-col bg-white shadow-lg rounded-lg overflow-hidden w-[95%] h-[95%] mx-auto">
            <div>
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-xl font-semibold">Your Cart</h2>
                </div>
                <div className="p-6 text-xs md:text-lg overflow-y-auto">
                    <div className="max-h-72 overflow-y-auto">
                        {cartlist.length>0?cartlist.map((item,index) => (
                            <Cartboxs item={item} key={index} />
                        )):<h3 className=" text-center">Cart is empty</h3>}
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                    <p className="font-semibold">Total</p>
                    <p>${totalAmount}</p>
                </div>
                <div className="flex justify-between">
                    <p className="font-semibold">Total Products</p>
                    <p>{cartlist.length}</p>
                </div>
                <div className="mt-4 flex justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Proceed to Checkout
                </button>
            </div>
            </div>
        </div>
    );
};

export default Cart;
