import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import ItemQuantitySelector from "./ItemQuantitySelector";

import { useCart } from "./CartContext";

function ItemDetail({ producto }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [mostrarBoton, setBoton] = useState(false);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const agregarCarrito = () => {
    addToCart({ ...producto, quantity });
  };

  const handleClick = () => {
    setBoton(true);
    agregarCarrito();
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <div className="content">
            <h2>{producto.title}</h2>
            <div className="card-image">
              <figure className="image is-1by1">
                <img src={producto.image} alt={producto.title} />
              </figure>
            </div>
            <h3>{producto.description}</h3>
            <h4>Valor ${producto.price}</h4>
          </div>
        </div>
        <div className="selectorCantidad">
          <ItemQuantitySelector onQuantityChange={handleQuantityChange} />
        </div>
        <div className="">
          <button className="button is-info m-2" onClick={handleClick}>
            Agregar al carrito
          </button>
          {mostrarBoton && (
            <Link to="/cart" className="button is-info m-2">
              Ver Carrito
            </Link>
          )}
        </div>
        <div className="boton-producto">
          <footer className="card-footer">
            <Link to="/" className="button is-success is-light is-small">
              Volver
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
