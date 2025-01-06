const express = require("express");
const vendedorRuta = express.Router();
const vendedorControlador = require("../controladores/vendedorControlador");

// api/clientes

//Crear -> post
vendedorRuta.post("/", vendedorControlador.crearVendedor);
//Obtener clientes -> get
vendedorRuta.get("/", vendedorControlador.obtenerVendedores);
//Actualizar cliente -> put
vendedorRuta.put("/:id", vendedorControlador.actualizarVendedor);
//Obtener un cliente -> get
vendedorRuta.get("/:id", vendedorControlador.obtenerVendedor);
//eliminar cliente-> delete
vendedorRuta.delete("/:id", vendedorControlador.eliminarVendedor);

module.exports = vendedorRuta;
