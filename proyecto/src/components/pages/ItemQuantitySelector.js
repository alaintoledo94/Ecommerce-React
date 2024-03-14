import React, { useState } from "react";
import "./ItemQuantitySelector.css"

const ItemQuantitySelector = ({ onQuantityChange }) => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
    onQuantityChange(contador + 1);
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
      onQuantityChange(contador - 1);
    } else {
      alert("No puede ser menor a 0");
    }
  };

  return (
    <div className="cantidadSelector is-flex is-justify-content-center is-flex-direction-row ">
      <button className="button is-link m-2 is-small" onClick={sumar}>+</button>
      <h2 className="has-text-weight-bold is-size-4">{contador}</h2>
      <button className="button is-link m-2 is-small" onClick={restar}>-</button>
      
    </div>
  );
};

export default ItemQuantitySelector;
