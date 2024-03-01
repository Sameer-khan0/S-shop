import CatagoryPre from "../components/CatagoryPreview";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Catagorypage() {
    const location = useLocation();
    const category = location.state ? location.state.category : null;
    const color = location.state ? location.state.bg : null;

  return (
    <div className="w-[95%] h-[95%] bg-white p-[2%] overflow-scroll">
      <div id="header" className="h-[10%]">
        <Navbar />
      </div>
      <div className="h-[100%]">
        <CatagoryPre category={category} color={color} />
      </div>
      <div className="h-[30%]">
        <Footer />
      </div>
    </div>
  );
}

export default Catagorypage;
