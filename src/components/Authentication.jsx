import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/design.jpg";
import { motion } from "framer-motion";
import Context from "../context/Context";
import axios from "axios";

function Authentication() {
  const context = useContext(Context);
  const navigate = useNavigate();
  const [authvalues, setauthvalues] = useState({});
  const [authtype, setauthtype] = useState(false);
  const { showalert } = context;


  const handleSignin = async (e) => {
    e.preventDefault();
    document.getElementById("submit").value = "Loading...";
    try {
      const url = "https://ecommerce-app-ashen-eight.vercel.app/api/user/registration";
      const sendData = {
        img: "fjsjflsajljflkasjflkasjfljasl",
        username: authvalues.username,
        email: authvalues.email,
        password: authvalues.password,
      };

      const response = await axios.post(url, sendData);
      if (response.data.userData) {
        const userdata = response.data.userData;
        if (userdata) {
          showalert("Otp is Sended", true, true);
          navigate("/otp", { state: { id: userdata._id } });
        }
      } else {
        showalert(
          response.data.message || "Something want wrong",
          false,
          false
        );
      }
    } catch (error) {
      console.error(error);
      showalert("Something want wrong", false, false);
    } finally {
      document.getElementById("submit").value = "Submit";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("username").value = "";
      setauthvalues({});
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    document.getElementById("submit").value = "Loading...";
    try {
      const url = "https://ecommerce-app-ashen-eight.vercel.app/api/user/login";
      const data = {
        email: authvalues.email,
        password: authvalues.password,
      };

      const response = await axios.post(url, data);

      if (response.data.status === "ok") {
        localStorage.setItem("token", response.data.token);
        navigate("/");
        showalert("You are loged in", true, true);
      } else {
        showalert("Something want wrong", false, false);
      }
    } catch (error) {
      console.error(error);
      showalert("Something want wrong", false, false);
    } finally {
      document.getElementById("submit").value = "Submit";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("username").value = "";
      setauthvalues({}); 
    }
  };

  const handleChange = (e) => {
    setauthvalues({ ...authvalues, [e.target.name]: e.target.value });
  };

  const handleAuthtype = () => {
    setauthtype(!authtype);
    setauthvalues({});
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="flex justify-center items-center w-[80%] shadow-xl p-1 md:w-[70%] h-[70%]"
    >
      <div className="h-[100%] w-[50%] md:block hidden">
        <img src={img} alt="img" className="w-full h-full object-cover" />
      </div>
      <div className=" bg-white h-full flex flex-col justify-center items-center w-full md:w-[50%] p-[4%]">
        {authtype ? (
          <>
            <h2 className="text-2xl md:text-xl font-semibold">LOGIN</h2>
            <form
              className="h-[60%] flex flex-col w-full justify-evenly"
              onSubmit={handleLogin}
            >
              <input
                id="email"
                className="p-[2%]"
                style={{ boxShadow: "0px 0px 3px #d6d6d6" }}
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                id="password"
                className="p-[2%]"
                style={{ boxShadow: "0px 0px 3px #d6d6d6" }}
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <input
                type="submit"
                id="submit"
                value="Submit"
                className="p-[2%] bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-blue-800 transition-colors duration-300 "
                disabled={!authvalues.email || !authvalues.password}
              />
              <p className="text-xm md:text-sm">
                New account? <span onClick={handleAuthtype}>Sign up</span>
              </p>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl md:text-xl font-semibold">SIGN UP</h2>
            <form
              className="h-[60%] flex flex-col w-full justify-evenly"
              onSubmit={handleSignin}
            >
              <input
                id="username"
                className="p-[2%]"
                style={{ boxShadow: "0px 0px 3px #d6d6d6" }}
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
              />
              <input
                className="p-[2%]"
                style={{ boxShadow: "0px 0px 3px #d6d6d6" }}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                className="p-[2%]"
                style={{ boxShadow: "0px 0px 3px #d6d6d6" }}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <input
                type="submit"
                id="submit"
                value="Submit"
                className="p-[2%] bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-blue-800 transition-colors duration-300 "
                disabled={
                  !authvalues.username ||
                  !authvalues.email ||
                  !authvalues.password
                }
              />
              <p className="text-xm md:text-sm">
                Already have an account?{" "}
                <span onClick={handleAuthtype}>Login</span>
              </p>
            </form>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default Authentication;
