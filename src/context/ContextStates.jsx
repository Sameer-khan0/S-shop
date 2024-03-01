import { useState } from "react";
import Contexts from "./Context";

const States = ({ children }) => {
  const [alert, setalert] = useState({
    msg: "",
    status: false,
    showalert: false,
    type: false
  });

  const [load, setload] = useState({
    progress: null,
    showloading: false,
  });


  function showalert(msg, status, type) {
    setalert({ msg: msg, status: status,type: type, showalert: true });
    setTimeout(() => {
      setalert({ msg: "", status: false, showalert: false });
    }, 5000);
  }


  return (
    <Contexts.Provider
      value={{
        setload,
        showalert,
        alert,
        load,
      }}
    >
      {children}
    </Contexts.Provider>
  );
};

export default States;
