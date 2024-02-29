// ItemDetail.js
import React from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";


function ItemDetail({ producto }) {
  if (!producto) {
    return <div>No se encontró el producto.</div>;
  }

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
        <div className="boton-producto">
        <footer className="card-footer">
          <Link to="/" className="button is-success is-light is-medium">
            Volver
          </Link>
        </footer>
        </div>

      </div>
    </div>
  );
}

export default ItemDetail;
