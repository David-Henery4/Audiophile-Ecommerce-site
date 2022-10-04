import { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Outlet } from "react-router-dom";
import { Category, Checkout, Home, Product } from "./pages";
import { Navbar, Footer } from "./layout";
import { Overlay } from "./components/overlay";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

// WILL USE "SLUG" FOR PRODUCTS
function App() {
  return (
    <main className="App main-layout">
      <BrowserRouter>
        <Wrapper>
          <Overlay />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="category/:categoryName" element={<Category />} />
            <Route path="product/:productSlug" element={<Product />} />
            <Route path="checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </main>
  );
}

export default App;
