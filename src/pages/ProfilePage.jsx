import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Avatar from "../assets/user.jpg";
import wave from "../assets/wave.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/user/userFunction";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Context from "../context/Context";

const DeveloperContactPage = () => {
  const context = useContext(Context);
  const { showalert } = context;
  const [imageSelected, setImageSelected] = useState();
  const [file, setFile] = useState();
  const { user, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    const { files } = event.target;
    setFile(files[files.length - 1]);
    setImageSelected(URL.createObjectURL(files[files.length - 1]));
  };

  const handelUpdate = async () => {
    try {
      document.getElementById("updateuser").innerHTML = "updating...";
      
      const url = "https://ecommerce-app-ashen-eight.vercel.app/api/user/profile/edit";
      // const url = "http://localhost:4023/api/user/profile/edit";
      const formDataToSend = new FormData();
      formDataToSend.append("file", file); 

      const req = await axios.put(url, formDataToSend, {
        headers: {
          token: localStorage.getItem('token'),
         }
        });
        
        if (req.data.status === "ok") {
          showalert("Updated", true, true);
        } else {
          showalert("Something went wrong", false, false);
        }
      } catch (error) {
        console.error(error);
        showalert("Something went wrong", false, false);
      }
      finally{
        document.getElementById("updateuser").innerHTML = "update";
      }
  };
  

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div className="w-[95%] h-[95%] bg-white p-[2%] overflow-scroll">
      <div id="header" className="h-[10%]">
        <Navbar />
      </div>
      <div
        className="h-[90%] grid place-items-center"
        onClick={() => console.log(user)}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl w-full bg-amber-100 rounded-lg shadow-lg p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex justify-center items-center">
              <label
                htmlFor="img"
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover shadow-lg overflow-hidden"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  className="rounded-full object-cover w-full h-full"
                  src={imageSelected ? imageSelected : (user.img ? user.img : Avatar)}
                  alt="Profile"
                />
                <input
                  type="file"
                  name="img"
                  id="img"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <div className="flex flex-col justify-center items-center">
              {loading ? (
                <h1 className="text-center">Loading...</h1>
              ) : (
                <>
                  <p className="text-xl font-semibold">{user.username}</p>
                  <p className="text-green-500 font-semibold">Customer</p>
                  <p className="text-gray-700">{user.email}</p>
                  {imageSelected && (
                    <button
                    id="updateuser"
                      onClick={handelUpdate}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
                    >
                      Update
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="h-30%">
            <img src={wave} className="w-full h-full" alt="Wave" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DeveloperContactPage;
