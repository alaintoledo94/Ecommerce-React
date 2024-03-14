import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import "bulma/css/bulma-rtl.min.css";
import Cart from "../assets/cart.png";

function CardWidget() {
  const { cartItems } = useCart();
  let totalQuantity = 0;
  cartItems.forEach((item) => {
    totalQuantity += item.quantity;
  });

  return (
    <Link to="/cart" className="has-text-white is-flex">
      <img
        className="mr-1 ml-5 has-text-light"
        src={Cart}
        alt="Carrito de compras"
      />
      <p className="co has-text-weight-bold is-size-6">{totalQuantity}</p>
    </Link>
  );
}

export default CardWidget;
