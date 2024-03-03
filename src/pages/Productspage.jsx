import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { fetchProducts } from "../redux/products/productFunctions";

function Productspage() {
  const { list } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  },[dispatch]);
  
  return (
    <div className=" w-[95%] h-[95%] bg-white p-[2%] overflow-scroll ">
      <div id="header" className=" h-[10%]">
        <Navbar />
      </div>
      <div className=" h-[100%] overflow-scroll">
        <Products products={list} />
      </div>
      <div className=" h-[30%]">
        <Footer />
      </div>
    </div>
  );
}

export default Productspage;
