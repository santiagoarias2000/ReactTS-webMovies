import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <h1>CRUD &nbsp;</h1>
          <Link to="/" className="nav-link">
            Inicio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/form" className="nav-link">
                  Formulario
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/list" className="nav-link">
                  Listado
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/product"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Producto
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/shoppingProduct" className="dropdown-item">
                      Compras
                    </Link>
                  </li>
                  <li>
                    <Link to="/singIn" className="dropdown-item">
                      Iniciar sesion
                    </Link>
                  </li>
                  <li>
                    <Link to="/blogueros" className="dropdown-item">
                      Blogueros
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};