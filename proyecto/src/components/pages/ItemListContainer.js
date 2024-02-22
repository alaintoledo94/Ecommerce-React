import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../data";
import "../pages/itemListContainer.css";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((response) => {
        setProducts(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div>
      <h1 className="has-text-centered">Productos</h1>
      <div className="columns is-multiline is-centered galeria">
        {products.map((producto, index) => {
          return (
            <div key={index} className="column is-one-third has-text-centered">
              <article className="box tarjeta">
                <h5>{producto.title}</h5>
                <img
                  className="img-prod"
                  src={producto.image}
                  alt={producto.description}
                />
                <h6>Valor ${producto.price}</h6>
                <div className="mt-2">
                  <Link to={`/catalogo/${producto.id}`} className="button">
                    Más info
                  </Link>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ItemListContainer;
