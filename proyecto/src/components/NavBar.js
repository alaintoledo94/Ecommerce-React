import "bulma/css/bulma-rtl.min.css";
import Cart from "./assets/cart.png";
import CardWidget from "./CartWidget";

function NavBar() {
  return (
    <nav
      class="navbar is-primary p-3 "
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img
            src="https://www.midnight-store.com/cdn/shop/files/LOGO_SHOPIFY_PRUEBA_2_200x.png"
            width="115"
            height="56"
          ></img>
        </a>

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
          <a class="navbar-item">Inicio</a>

          <a class="navbar-item">Ultimos productos</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Categorias</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">Poleras Manga Corta</a>
              <a class="navbar-item">Poleras Manga Larga</a>
              <a class="navbar-item">Polerones Polo</a>
              <a class="navbar-item">Polerones Canguro</a>
            </div>
          </div>
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
