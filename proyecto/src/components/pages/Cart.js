import React from "react";
import { useCart } from "./CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";

const ProductosGuardados = () => {
  const { cartItems, eliminarUnidad } = useCart();

  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  return (
    <div className="cont-prods container has-border">
      <div>
        <h2 className="check-title">Productos en el carrito:</h2>
        {cartItems.map((item, index) => (
          <div key={index} className="prods-check">
            <div>
              <img
                className="img-check"
                src={item.image}
                alt="imagen producto"
              />
              <div>
                <p>{item.title}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Valor unitario ${item.price}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => eliminarUnidad(item.id)}
                className="button is-link ml-4"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
        <p className="total-text ">Total a pagar: ${totalPrice}</p>
      </div>
      <div className="mt-5">
        <Link to="checkout">
          <button className="button is-info m-2">Pagar</button>
        </Link>

        <Link to="/">
          <button className="button is-info m-2">Volver</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductosGuardados;
