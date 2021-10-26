import React, { Fragment } from "react";
import "./producto.css";

const Producto = ({ producto, productos, changuito, agregarProducto }) => {
  const { id, articulo, precio, descripcion, foto } = producto;

  function seleccionarProducto(id) {
    const producto = productos.filter((producto) => producto.id === id)[0];
    agregarProducto([...changuito, producto]);
    //console.log(producto);
    console.log(changuito);
  }

  //quitar prodcuto
  function eliminarProducto(id) {
    const productos = changuito.filter((producto) => producto.id !== id);
    agregarProducto(productos);
  }

  return (
    <Fragment>
      <div class="card d-flex justify-content-between">
        <div class="card-body d-flex">
          <img
            src={foto}
            class="img-responsive"
            style={{ width: 150, height: 150 }}
            alt="..."
          ></img>
          <div>
            <h5 class="card-title">{articulo} </h5>
            <p>
              <i>{descripcion}</i>
            </p>
            <h4> ${precio} </h4>
            {productos ? (
              <button
                class="btn btn-danger d-flex"
                type="button"
                onClick={() => seleccionarProducto(id)}
              >
                {" "}
                Comprar
              </button>
            ) : (
              <button
                class="btn btn-outline-danger"
                type="button"
                onClick={() => eliminarProducto(id)}
              >
                {" "}
                Eliminar
              </button>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Producto;
