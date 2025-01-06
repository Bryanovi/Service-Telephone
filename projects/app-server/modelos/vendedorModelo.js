const mongoose = require("mongoose");
const vendedorSchema = mongoose.Schema({
  nombresCompletos: {
    type: String,
    require: true,
  },
  fechaIngreso: {
    type: Date,
    require: true,
  },
  direccion: {
    type: String,
    require: true,
  },
  celular: {
    type: String,
    require: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("vendedor", vendedorSchema);
