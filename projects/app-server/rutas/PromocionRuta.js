const express = require("express");
const ruta = express.Router();
const promocionControlador = require("../controladores/promocionControlador");

// api/clientes

//Crear -> post
ruta.post("/", promocionControlador.crearPromocion);
//Obtener clientes -> get
ruta.get("/", promocionControlador.obtenerPromociones);
//Actualizar cliente -> put
ruta.put("/:id", promocionControlador.actualizarPromocion);
//Obtener un cliente -> get
ruta.get("/:id", promocionControlador.obtenerPromocion);
//eliminar cliente-> delete
ruta.delete("/:id", promocionControlador.eliminarPromocion);

module.exports = ruta;
