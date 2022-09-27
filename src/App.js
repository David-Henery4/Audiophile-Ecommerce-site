import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Category, Checkout, Home, Product} from "./pages"; // will add all to router
import {Navbar, Footer} from "./layout"

// WILL USE "ID" FOR PRODUCTS
function App() {
  return (
    <div className="App main-layout">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="checkout" element={<Checkout/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
