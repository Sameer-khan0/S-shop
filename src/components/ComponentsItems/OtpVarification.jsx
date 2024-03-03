import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import Contexts from "../../context/Context";
import axios from "axios";

function OTP() {
  const context = useContext(Contexts);
  const { showalert } = context;
  const navigate = useNavigate();
  const [otp, setotp] = useState();
  const location = useLocation();
  const id = location.state ? location.state.id : null;

  const handelSubmnit = async () => {
    try {
      const url = `https://ecommerce-app-ashen-eight.vercel.app/api/user/varifying/otp`;
      document.getElementById("verifying").value = "Loading...";
      if (otp.length == "" || otp.length !== 4 || !id) {
        showalert("Enter vaild crudation", false, false);
        return;
      }
      const response = await axios.post(url, {
        userId: id,
        otp: otp,
      });
      if (response.data.status === "ok") {
        navigate("/configration", { state: { isValid: true } });
      }
    } catch (error) {
      console.error(error);
    } finally {
      document.getElementById("otp").value = "";
      document.getElementById("verifying").value = "Verify";
    }
  };

  const handelResend = async () => {
    try {
      const url = `https://ecommerce-app-ashen-eight.vercel.app/api/user/resend/otp`;
      const response = await axios.post(url, {
        userId: id,
      });
      if (response.data.status === "ok") {
        alert("Check your Gmail")
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="flex justify-center items-center w-[80%] shadow-xl bg-white p-1 md:w-[70%] h-[70%]"
    >
      <div className=" h-[80%] w-[50%] flex flex-col justify-evenly items-center">
        <h1 className=" text-center font-semibold text-2xl">OTP VARIFICATION</h1>
        <div className=" h-[30%] flex flex-col justify-evenly">
          <input
            id="otp"
            onChange={(e) => setotp(e.target.value)}
            type="number"
            placeholder="OTP"
            className=" p-2 bg-slate-100 text-black font-semibold"
            pattern="[0-9]{4}"
            maxLength={4}
            minLength={4}
            title="Please enter exactly 4 digits"
          />

          <input
            type="button"
            value="Verify"
            id="verifying"
            className=" p-2 text-white bg-blue-500"
            onClick={() => handelSubmnit()}
          />
        </div>
        <p>
          Resend otp <span className=" text-blue-300" onClick={()=> handelResend()}>Resend</span>
        </p>
      </div>
    </motion.div>
  );
}

export default OTP;
