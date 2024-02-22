import NavBar from "./components/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetalleProducto from "./components/pages/DetalleProducto";
import FiltroProducto from "./components/pages/FiltroProducto";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <nav>{<NavBar />}</nav>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="catalogo/:productoId" element={<DetalleProducto />} />
        <Route path="categoria/:categoria" element={<FiltroProducto />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
      <footer><Footer/></footer>
    </BrowserRouter>
  );
}

export default App;
