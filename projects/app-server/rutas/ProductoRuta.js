const express = require("express");
const productoRuta = express.Router();
const productoControlador = require("../controladores/productoControlador");

// api/clientes

//Crear -> post
productoRuta.post("/", productoControlador.crearProducto);
//Obtener clientes -> get
productoRuta.get("/", productoControlador.obtenerProductos);
//Actualizar cliente -> put
productoRuta.put("/:id", productoControlador.actualizarProducto);
//Obtener un cliente -> get
productoRuta.get("/:id", productoControlador.obtenerProducto);
//eliminar cliente-> delete
productoRuta.delete("/:id", productoControlador.eliminarProducto);

module.exports = productoRuta;
