import React, { Fragment } from "react";

const Footer = () => {
  //aca pongo el javascript que necesito.
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top container-lg">
        <p class="col-md-4 mb-0 text-muted">© {fecha} Kaminari Burger</p>

        <a
          href="/"
          class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <svg class="bi me-2" width="40" height="32">
            <use xlinkhref="#bootstrap"></use>
          </svg>
        </a>

        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Inicio
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Ubicacion
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Nuestra Historia
            </a>
          </li>
        </ul>
      </footer>
    </Fragment>
  );
};

export default Footer;
