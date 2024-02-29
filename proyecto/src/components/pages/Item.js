import React from "react";
import { Link } from "react-router-dom";
import "../pages/itemListContainer.css";

function Item({ product }) {
  return (
    <div className="column is-one-third has-text-centered">
      <article className="box card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <img
                  className="img-prod"
                  src={product.image}
                  alt={product.description}
                />
              </figure>
            </div>
            <div className="media-content box-content">
              <div>
                <h5>{product.title}</h5>
                <h7>{product.description}</h7>
              </div>
              <h6 className="price">Valor ${product.price}</h6>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="card-footer-item">
            <Link to={`/catalogo/${product.id}`} className="button is-success is-light is-medium">
              Más info
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Item;