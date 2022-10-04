import { useLayoutEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
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
        <Wrapper>
          <Overlay />
          <Navbar />
            <Outlet/>
          <Footer />
        </Wrapper>
    </main>
  );
}

export default App;
