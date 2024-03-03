import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import img from '../assets/glasses.png'
import { GiHappySkull } from 'react-icons/gi';


function Comingsoon() {
  return (
    <div className=" w-[95%] h-[95%] bg-white p-[2%] overflow-scroll ">
      <div id="header" className=" h-[10%]">
        <Navbar />
      </div>
      <div className=" h-[100%] grid place-items-center">
        <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className=" h-[50%] w-[80%] md:w-[50%] bg-yellow-300 rounded-md shadow-md text-white flex flex-col justify-center items-center"
        >
          <div>
            <img src={img} alt="image" />
          {/* <GiHappySkull size={40} className=" text-black" /> */}
          </div>
          <h1 className=" text-black text-2xl font-bold">
          COMING SOON
          </h1>
        </motion.div>
      </div>
      <div className=" h-[20%]">
        <Footer />
      </div>
    </div>
  );
}

export default Comingsoon;
