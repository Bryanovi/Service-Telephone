const express = require("express");
const conectarBD = require("./config/db");
const cors = require("cors");

//crear servidor
const app = express();

//conectar bd
conectarBD();

app.use(express.json());
app.use(cors());

//Llamar a las apis
// api clientes
app.use("/api/promociones", require("./rutas/PromocionRuta"));
//api productos
app.use("/api/productos", require("./rutas/ProductoRuta"));
//api vendedores
//app.use("/api/vendedores", require("./rutas/VendedorRuta"));
//api cajas
//app.use("/api/cajas", require("./rutas/CajaRuta"));

//Definir ruta inicial
app.get("/", (req, res) => {
  res.send("Servidor activo");
});

//Definir puerto de escucha
app.listen(4200, () => {
  console.log("Servidor ejecutando");
});
