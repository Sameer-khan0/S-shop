import Homepage from "./pages/Hompage";
import Cartpage from './pages/Cartpage'
import CatagoryPage from './pages/CatagoryPage'
import Wishlistpage from './pages/Wishlistpage'
import Productspage from './pages/Productspage'
import Contectpage from './pages/Contectpage'
import Profilepage from './pages/ProfilePage'
import Productpage from './pages/Productpage'
import Otp from "./components/ComponentsItems/OtpVarification";
import Authenticationpage from "./pages/Authpage"
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { useContext} from "react";
import Alert from "./components/Alert";
import Contexts from "./context/Context";
import Configration from "./pages/Configrationpage"
import Csoon from './pages/ComingsoonPage'

function App() {

  const Context=useContext(Contexts)
  const {alert}=Context

  return (
    <div className="w-screen h-screen bg-slate-200 grid place-items-center relative">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/auth' element={<Authenticationpage />} />
          <Route path='/otp' element={<Otp />} />
          <Route path='/configration' element={<Configration />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/categorypage" element={<CatagoryPage />} />
          <Route path="/contect" element={<Contectpage />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/wishlist" element={<Wishlistpage />} />
          <Route path="/products" element={<Productspage />} />
          <Route path="/product" element={<Productpage />} />
          <Route path="/comesoon" element={<Csoon />} />
        </Routes>
      </Router>
      {alert.showalert && (
          <Alert
            msg={alert.msg}
            status={alert.status}
            showalert={alert.showalert}
            type={alert.type}
          />
        )}
    </div>

  );
}

export default App;
