import { useState, Fragment } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Producto from "./components/Producto";
import Changuito from "./components/Changuito";

function App() {
  //Listado de pizzas con un state

  const [productos, guardarProductos] = useState([
    { id: 1, articulo: "Shikamaru Nara", precio: "600", descripcion: "Hamburguesa con queso", foto:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXEH2NW/200/200/original?country=ar" },
    { id: 2, articulo: "Sasuke Uchiha", precio: "620",descripcion: "Hamburguesa con lechuga, tomate y cebolla",  foto:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXxkywA/200/200/original?country=ar"  },
    { id: 3, articulo: "Naruto Uzumaki", precio: "700",descripcion: "Hamburguesa doble con queso y pacenta" , foto:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kQXnpmyG/200/200/original?country=ar" },
    { id: 4, articulo: "Choji Akimichi", precio: "730",descripcion: "Hamburguesa triple con queso y panceta", foto:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kQX3BMhy/200/200/original?country=ar" },
    { id: 5, articulo: "Sakura Haruno", precio: "550" ,descripcion: "Hamburguesa de vegetales", foto:"https://www.mcdonalds.com/content/dam/uk/nfl/nutrition/nfl-product/product/related/mcdonalds-Vegetable-Deluxe.jpg" },
    { id: 6, articulo: "Bebida", precio: "80",descripcion: "Gaseosa o Agua", foto:"http://d2r9epyceweg5n.cloudfront.net/stores/001/744/751/products/pepsi-chica-celeste1-03dee73fbaff2bf7ee16260986176109-640-0.png"  },
  ]);

  //state para changuito

  const [changuito, agregarProducto] = useState([]);

  return (
    <Fragment>
      <Header />
      <div class="container mt-5 ">
        <div class="d-flex justify-content-between">
          <div>
            {productos.map((producto) => (
              <Producto
                key={producto.id}
                producto={producto}
                productos={productos}
                changuito={changuito}
                agregarProducto={agregarProducto}
              />
            ))}
          </div>
          <div>
            <Changuito
              changuito={changuito}
              agregarProducto={agregarProducto}
            />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
