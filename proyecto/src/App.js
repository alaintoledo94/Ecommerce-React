import NavBar from "./components/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer";
import ItemDetailContainer from "./components/pages/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <nav>{<NavBar />}</nav>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="catalogo/:productoId" element={<ItemDetailContainer />} />
        <Route path="categoria/:categoryID" element={<ItemListContainer />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
