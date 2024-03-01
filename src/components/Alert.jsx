import {motion} from "framer-motion"

function Alert(props) {

    return (
      <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className=" w-auto md:w-[25rem] shadow-2xl absolute right-[20px] bottom-[25px] backdrop-blur-sm ">
      {props.showalert &&
        <div style={{"borderBottom":`4px solid ${props.type?"white":"black"}`}} className={` text-white font-semibold ${props.type?"bg-blue-500":'bg-red-500'} shadow-2xl z-[500] px-4 py-3 rounded relative`} role="alert">
          <span className="block sm:inline">
            {props.msg || "Something went wrong"}
          </span>
        </div>
      }
      </motion.div>
    );
  }
  
  export default Alert;
  