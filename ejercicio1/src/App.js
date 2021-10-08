import { useState, Fragment } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Producto from "./components/Producto";

function App() {
  //Listado de pizzas con un state

  const [productos, guardarProductos] = useState([
    { id: 1, articulo: "Pizza Anchoas", precio: "900" },
    { id: 2, articulo: "Pizza Muzzarella Grande", precio: "800" },
    { id: 3, articulo: "Pizza Jamon y Queso", precio: "850" },
    { id: 4, articulo: "Pizza Huevo", precio: "870" },
    { id: 5, articulo: "Pizza Muzarella y morrón", precio: "830" },
    { id: 6, articulo: "Gaseosa", precio: "200" },
  ]);

  return (
    <Fragment>
      <Header />
      <h1>Torre de Pizza - Pedí ahora!</h1>
      {productos.map((producto) => (
        <Producto producto={producto} />
      ))}
      <Footer />
    </Fragment>
  );
}

export default App;
