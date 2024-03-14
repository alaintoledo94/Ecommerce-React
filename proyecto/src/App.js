import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/pages/ItemListContainer';
import ItemDetailContainer from './components/pages/ItemDetailContainer';
import { CartProvider } from './components/pages/CartContext';
import Checkout from './components/pages/Checkout'; 
import Footer from './components/Footer';
import ProductosGuardados from './components/pages/Cart';
import Boleta from './components/pages/Boleta';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <nav>
          <NavBar />
        </nav>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="catalogo/:productoId" element={<ItemDetailContainer />} />
          <Route path="categoria/:categoryID" element={<ItemListContainer />} />
          <Route path="cart" element={<ProductosGuardados />} />
      
          <Route path="cart/checkout" element={<Checkout />} />
          <Route path="/boleta" element={<Boleta />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
