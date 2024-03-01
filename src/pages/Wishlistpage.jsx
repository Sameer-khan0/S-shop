import Wishlist from "../components/Wishlist"
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { fetchWishlist } from "../redux/wishlist/wishlistFunctions"

function Wishlistpage() {
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchWishlist())
  },[dispatch])
  

  const { wishlist } = useSelector(state => state.wishlist);
      
  return (
    <div className=" w-[95%] h-[95%] bg-white p-[2%] overflow-scroll ">
      <div id="header" className=" h-[10%]">
        <Navbar />
      </div>
      <div className=" h-[90%] overflow-scroll ">
        {wishlist.length>0?<Wishlist items={wishlist} />:<h3 className=" pt-5 text-center">Wislist is empty</h3>}
      </div>
      <div className=' h-[30%]'>
        <Footer/>
      </div>
      </div>
  )
}

export default Wishlistpage
