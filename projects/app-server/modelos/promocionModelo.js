const mongoose = require("mongoose");
const clienteSchema = mongoose.Schema({
  producto: {
    type: String,
    require: true,
  },
  descuento: {
    type: Number,
    require: true,
  },
  fechaInicio: {
    type: Date,
    require: true,
  },
  fechaFin: {
    type: Date,
    require: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("cliente", clienteSchema);
