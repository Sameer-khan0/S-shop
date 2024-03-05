import { motion } from "framer-motion";
import { useState } from "react";

function Alert(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <motion.div
      initial={{ x: 20 }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className="w-[50%] opacity-90 md:w-[25rem] shadow-2xl absolute right-[20px] backdrop-blur-sm top-16 md:top-[90%]"
    >
      {show && (
        <div
          style={{
            borderBottom: `4px solid ${props.type ? "white" : "black"}`
          }}
          className={`text-white font-semibold ${
            props.type ? "bg-blue-500" : "bg-yellow-500"
          } shadow-2xl z-[500] px-4 py-3 rounded relative`}
          role="alert"
        >
          <span className="block sm:inline">
            {props.msg || "Something went wrong"}
          </span>
          <button
            onClick={handleClose}
            className="absolute top-0 right-0 px-3 py-1 mt-2 mr-2 bg-transparent text-white text-sm font-semibold focus:outline-none"
          >
            &times;
          </button>
        </div>
      )}
    </motion.div>
  );
}

export default Alert;
