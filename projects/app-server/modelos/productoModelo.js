const mongoose = require("mongoose");
const productoSchema = mongoose.Schema({
  marca: {
    type: String,
    require: true,
  },
  descripcion: {
    type: String,
    require: true,
  },
  precio: {
    type: Number,
    require: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("producto", productoSchema);
