import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import check from "../assets/Check.png";
function Configrationpage() {
  const location = useLocation();
  const isValid = location.state?.isValid
  // const isValid = true;

  return (
    <>
      {isValid && (
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className=" w-[70%] md:w-[50%] h-[60%] flex justify-center items-center flex-col bg-slate-100"
        >
          <div className=" h-[60%]">
            <img
              src={check}
              className="w-full h-full object-contain"
              alt="img"
            />
          </div>
          <div className=" h-[40%] text-center flex justift-center items-center gap-3 flex-col">
            <h2>
              Your account has been verified You can now log in go back and
              login
            </h2>
            <p>You can now log in go back and login</p>
            <Link to="/auth">
              <button className=" w-40 bg-green-500 text-white p-2">
                Login
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Configrationpage;
