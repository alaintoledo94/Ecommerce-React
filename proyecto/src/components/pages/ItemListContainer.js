import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../data";
import "../pages/itemListContainer.css";
import Item from "../pages/Item";
import MapeoProductos from "./ItemList";

function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { categoryID } = useParams();
  const productos = MapeoProductos();

  useEffect(() => {
    setLoading(true);

    const asyncFunc = categoryID ? getProductsByCategory : getProducts;

    asyncFunc(categoryID)
      .then((response) => {
        setProducts(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [categoryID]);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div className="Container">
      <h1 className="has-text-centered">Productos Disponibles</h1>
      <div className="columns is-multiline is-centered galeria">
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
