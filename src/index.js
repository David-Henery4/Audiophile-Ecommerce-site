import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./styles.scss";
import { Home, Category, Checkout, Product } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index={true} element={<Home />} />
              <Route path="category/:categoryName" element={<Category />} />
              <Route path="product/:productSlug" element={<Product />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
