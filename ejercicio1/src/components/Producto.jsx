import React, { Fragment } from "react";

const Producto = ({ producto }) => {
  const { id, articulo, precio } = producto;

  return (
    <Fragment>
      <div>
        <h3>
          {id} - {articulo} -{precio}
        </h3>
      </div>
    </Fragment>
  );
};

export default Producto;
