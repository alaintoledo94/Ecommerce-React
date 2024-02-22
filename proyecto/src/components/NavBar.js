import "bulma/css/bulma-rtl.min.css";
import Cart from "./assets/cart.png";
import CardWidget from "./pages/CartWidget";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav
      class="navbar is-primary p-3 "
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <Link to="/" class="navbar-item" >
          <img
            src="https://www.midnight-store.com/cdn/shop/files/LOGO_SHOPIFY_PRUEBA_2_200x.png"
            width="115"
            height="56"
          ></img>
        </Link>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu justify-content-between">
        <div class="navbar-start">
          <Link to ="/" class="navbar-item">Todos los Productos</Link>
          <Link to="/categoria/ropa"  class="navbar-item">Ropa</Link>
          <Link to="/categoria/electronico"  class="navbar-item">Electronicos</Link>
          <Link to="/categoria/accesorios" class="navbar-item">Accesorios</Link>

 
        </div>

        <div class="navbar-end ml-auto">
          <div class="navbar-item">
            <div class="buttons ">
              <span class="icon-text">
                <div>
                  <i class="fas fa-home"></i>
                  <CardWidget iconoCarrito={Cart}></CardWidget>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
