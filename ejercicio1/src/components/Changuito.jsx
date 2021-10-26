import React, { Fragment } from "react";
import Producto from "./Producto";
import "./changuito.css";

const Changuito = ({ changuito, agregarProducto }) => {
  var productos = changuito.map((producto) => (
    <Producto
      key={producto.id}
      producto={producto}
      changuito={changuito}
      agregarProducto={agregarProducto}
    />
  ));

  return (
    <Fragment>
      <div>
        <h4 class="text-danger">Tu pedido</h4>
        {productos}
      </div>
    </Fragment>
  );
};

export default Changuito;
