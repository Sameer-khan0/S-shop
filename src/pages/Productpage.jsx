import Navbar from '../components/Navbar'
import Product from '../components/ComponentsItems/productPreview'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Products from '../components/Products';
import Footer from '../components/Footer'

function Productspage() {
  const location = useLocation();
  const product = location.state ? location.state.product : null;

  const { list } = useSelector(state => state.products);
  const similarProducts= list.filter((e)=>e.category == product.category)

  return (
    <div className=" w-[95%] h-[95%] bg-white p-[2%] overflow-scroll " >
      <div id="header" className=" h-[10%]">
        <Navbar />
      </div>
      <div className=" h-[90%] grid place-items-center">
        <Product product={product} />
      </div>
      <div className=" h-[90%] overflow-scroll">
        <Products products={similarProducts} />
      </div>
      <div className=' h-[30%]'>
        <Footer/>
      </div>
      </div>
  )
}

export default Productspage
