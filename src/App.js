import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Category, Checkout, Home, Product} from "./pages"; // will add all to router
import {Navbar, Footer} from "./layout"


function App() {
  return (
    <div className="App main-layout">
      <Navbar/>
      {/* <Home/> */}
      <Category/>
      <Footer/>
    </div>
  );
}

export default App;
