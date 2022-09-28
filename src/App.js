import { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {Category, Checkout, Home, Product} from "./pages"; // will add all to router
import {Navbar, Footer} from "./layout"

const Wrapper = ({children}) => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0,0);
  }, [location.pathname])
  return children
}

// WILL USE "SLUG" FOR PRODUCTS
function App() {
  return (
    <div className="App main-layout">
      <BrowserRouter>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="product/:productSlug" element={<Product />} />
          <Route path="checkout" element={<Checkout/>}/>
        </Routes>
        <Footer />
      </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
