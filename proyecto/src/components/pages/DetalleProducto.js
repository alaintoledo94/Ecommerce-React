// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import listaProductos from "../../data";
// import "../pages/DetalleProducto.css";

// function DetalleProducto() {
//   const { productoId } = useParams();
//   const [producto, setProducto] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       const foundProducto = listaProductos.find(
//         (producto) => producto.id === parseInt(productoId)
//       );
//       setProducto(foundProducto);
//       setLoading(false);
//     }, 500);

//     return () => clearTimeout(timeout);
//   }, [productoId]);

//   if (loading) {
//     return <div>Cargando...</div>;
//   }

//   if (!producto) {
//     return <div>No se encontró el producto.</div>;
//   }

//   return (
//     <div className="container">
//       <div className="card">
//         <div className="card-image">
//           <figure className="image is-1by1">
//             <img src={producto.image} alt={producto.title} />
//           </figure>
//         </div>
//         <div className="card-content">
//           <div className="content">
//             <h2>{producto.title}</h2>
//             <h3>{producto.description}</h3>
//             <h4>Valor ${producto.price}</h4>
//           </div>
//         </div>
//         <footer className="card-footer">
//           <Link to="/" className="card-footer-item button">
//             Volver
//           </Link>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default DetalleProducto;
