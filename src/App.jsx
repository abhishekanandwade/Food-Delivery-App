import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Home from "./pages/Home/home";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
  );
}

export default App;
