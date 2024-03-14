import React, { useState } from "react";
import FirebaseHandler from "../../config/firebase";
import { Link } from "react-router-dom";

function Checkout() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");

  const handlePagarClick = async () => {
    if (!nombre || !apellido || !direccion || !email) {
      alert("Todos los campos son requeridos");
      return;
    }
    const datos = { nombre, apellido, direccion, email };
    await FirebaseHandler.handlePagar(datos);
  };
  return (
    <div className="columns is-centered mt-5 has-background-info-light is-narrow">
      <div className="column is-narrow">
        <div className="field">
          <label className="label">Nombre</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Apellido</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Dirección</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Dirección"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="field is-grouped is-grouped-centered">
          <div className="control">
            <Link to="/boleta">
              <button className="button is-primary" onClick={handlePagarClick}>
                Pagar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
