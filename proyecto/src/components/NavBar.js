import "bulma/css/bulma-rtl.min.css";
import Cart from "./assets/cart.png";
import CardWidget from "./pages/CartWidget";
import { Link } from "react-router-dom";
import "../components/navBar.css";

function NavBar() {
  return (
    <nav
      className="navbar is-black p-3"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img
            src="https://www.midnight-store.com/cdn/shop/files/LOGO_SHOPIFY_PRUEBA_2_200x.png"
            width="115"
            height="56"
            alt="Logo"
          />
        </Link>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Todos los Productos
          </Link>
          <Link to="/categoria/ropa" className="navbar-item">
            Ropa
          </Link>
          <Link to="/categoria/electronico" className="navbar-item">
            Electrónicos
          </Link>
          <Link to="/categoria/accesorios" className="navbar-item">
            Accesorios
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <span className="icon-text">
                <div>
                  <i className="fas fa-home"></i>
                  <CardWidget />
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
