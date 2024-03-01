import Cart from '../components/Cart'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { fetchCart } from "../redux/cart/cartFunctions"
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

function Cartpage() {
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchCart())
  },[dispatch])
  
  return (
    <div className=" w-[95%] h-[95%] bg-white p-[2%] overflow-scroll ">
      <div id="header" className=" h-[10%]">
        <Navbar />
      </div>
      <div className=" h-[100%] grid place-items-start">
        <Cart />
      </div>
      <div className=' h-[20%]'>
        <Footer/>
      </div>
      </div>
  )
}

export default Cartpage
