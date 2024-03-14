import listaProductos from "../../data";

function MapeoProductos() {
  const productosMapeados = listaProductos.map((producto) => ({
    id: producto.id,
    title: producto.title,
    description: producto.description,
    image: producto.image,
    price: producto.price,
    rating: producto.rating,
  }));

  return productosMapeados;
}

export default MapeoProductos;
