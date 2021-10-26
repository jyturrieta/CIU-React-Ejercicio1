import React, { Fragment } from "react";
import "./header.css";

const Header = () => {
  return (
    <Fragment class="">
      <div class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom container-lg">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <svg class="bi me-2" width="40" height="32">
            <use xlinkhref="#bootstrap"></use>
          </svg>
          <span class="fs-4 text-danger">KAMINARI BURGER</span>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item">
            <a href="#" class="nav-link active bg-danger" aria-current="page">
              Menú
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-danger">
              ¿Dónde estamos?
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-danger">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Header;
