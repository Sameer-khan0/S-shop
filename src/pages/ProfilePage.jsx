import { motion } from 'framer-motion';
import Navbar from "../components/Navbar"
import Developer from "../assets/user.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/user/userFunction';
import { useEffect } from 'react';

const DeveloperContactPage = () => {
  const {user}=useSelector(e=>e.user)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchUser())
  },[])

  return (
    <div className=" w-[95%] h-[95%] bg-white p-[2%] overflow-scroll ">
      <div id="header" className=" h-[10%]">
        <Navbar />
      </div>
      <div className=" h-[90%] grid place-items-center" onClick={()=>console.log(user)}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl w-full bg-slate-200 rounded-lg shadow-lg p-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex justify-center items-center">
            <motion.img
              whileHover={{ scale: 1.1 }}
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-contain shadow-lg"
              src={Developer}
              alt="Developer"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-xl font-semibold">M{user.username}</p>
            <p className="text-gray-700">Customer</p>
            <p className="text-gray-700">{user.email}</p>
          </div>
        </div>
      </motion.div>
    </div>
</div>
  );
};

export default DeveloperContactPage;
