import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link} from "react-router-dom";
import {toggleCart, toggleOverlay, clearCart, changeCartItemQuantity, getCartTotal} from "../../features/cart/cartSlice";
import { useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch()
  const { isCartActive, cartItems, cartTotal } = useSelector((store) => store.cart);
  //
  const handleCheckoutClick = () => {
    dispatch(toggleCart())
    dispatch(toggleOverlay())
  }
  //
  useEffect(() => {
    dispatch(getCartTotal())
  }, [cartItems])
  //
  return (
    <div className={isCartActive ? "cart cart-active" : "cart"}>
      <div className="cart-top">
        <h6 className="cart-top__header">{`Cart (${cartItems.length})`}</h6>
        <button
          className="cart-top__remove-btn"
          onClick={() => dispatch(clearCart())}
        >
          Remove all
        </button>
      </div>
      {/* CART ITEMS */}
      <div className="cart-items">
        {cartItems.length <= 0 ? (
          <p>No items in the cart.</p>
        ) : (
          cartItems.map((item) => {
            return (
              <div key={item.id} className="cart-items-item">
                <img
                  className="cart-items-item__img"
                  src={require(`../../assets/${item.cartImage}`)}
                  alt={`${item.nickName}-cart-img`}
                />
                <p className="cart-items-item__name">{item.nickName}</p>
                <p className="cart-items-item__price">${item.price}</p>
                <div className="cart-items-item-quantity">
                  <p
                    className="cart-items-item-quantity__minus"
                    onClick={() =>
                      dispatch(
                        changeCartItemQuantity({ id: item.id, type: "dec" })
                      )
                    }
                  >
                    -
                  </p>
                  <p className="cart-items-item-quantity__amount">
                    {item.itemQuantity}
                  </p>
                  <p
                    className="cart-items-item-quantity__plus"
                    onClick={() =>
                      dispatch(
                        changeCartItemQuantity({ id: item.id, type: "inc" })
                      )
                    }
                  >
                    +
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
      {/*********************/}
      <div className="cart-pricing">
        <p className="cart-pricing__total">TOTAL</p>
        <p className="cart-pricing__price">${cartTotal}</p>
      </div>
      <Link
        to="/checkout"
        className="cart__checkout-btn"
        onClick={handleCheckoutClick}
        style={{ pointerEvents: cartItems.length <= 0 ? "none" : "" }}
      >
        <p
          className="btn-basic-1 cart__checkout-btn"
        >
          CHECKOUT
        </p>
      </Link>
    </div>
  );
};

export default Cart;
