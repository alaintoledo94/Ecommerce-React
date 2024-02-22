import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import listaProductos from "../../data";
import "../pages/FiltroProducto.css";
import "../pages/itemListContainer.css";

function FiltroProducto() {
  const { categoria } = useParams();
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      const productosFiltrados = listaProductos.filter(
        (producto) => producto.category === categoria
      );
      setProductosFiltrados(productosFiltrados);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [categoria]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container">
      <div className="columns is-multiline">
        {productosFiltrados.map((producto) => (
          <div key={producto.id} className="column is-one-third">
            <div className="card tarjeta">
              <div className="card-image">
                <figure className="image is-1by1">
                  <img src={producto.image} alt={producto.title} />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <h2>{producto.title}</h2>
                  <h3>Valor ${producto.price}</h3>
                  <h4>Valoración {producto.rating.rate}</h4>
                </div>
              </div>
              <div className="mt-2">
                <Link to={`/catalogo/${producto.id}`} className="button boton">
                  Más info
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FiltroProducto;
