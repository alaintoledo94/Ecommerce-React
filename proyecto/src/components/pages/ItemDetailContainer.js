// ItemDetailContainer.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import listaProductos from "../../data";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { productoId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const foundProducto = listaProductos.find(
        (producto) => producto.id === parseInt(productoId)
      );
      setProducto(foundProducto);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [productoId]);

  return (
    <div>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <ItemDetail producto={producto} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
