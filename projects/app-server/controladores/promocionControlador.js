const Promocion = require("../modelos/promocionModelo");

//Crear Promocion
exports.crearPromocion = async (req, res) => {
  try {
    let promocion;
    promocion = new Promocion(req.body);
    await promocion.save();
    res.send(promocion);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas en el registro del promocion");
  }
};

//Obtener promocions
exports.obtenerPromociones = async (req, res) => {
  try {
    const promocion = await Promocion.find();
    res.json(promocion);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al cargar los promocion");
  }
};

//Actualizar promocion
exports.actualizarPromocion = async (req, res) => {
  try {
    const { producto, descuento, fechaInicio, fechaFin } = req.body;
    let promocion = await Promocion.findById(req.params.id);
    if (!promocion) {
      res.status(404).json({ msg: "No existe el promocion" });
    }

    promocion.producto = producto;
    promocion.descuento = descuento;
    promocion.fechaInicio = fechaInicio;
    promocion.fechaFin = fechaFin;

    promocion = await Promocion.findOneAndUpdate(
      { _id: req.params.id },
      promocion,
      {
        new: true,
      }
    );

    res.json(promocion);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al actualizar el promocion");
  }
};

//Obtener promocion
exports.obtenerPromocion = async (req, res) => {
  try {
    let promocion = await Promocion.findById(req.params.id);
    if (!promocion) {
      res.status(404).json({ msg: "No existe el promocion" });
    }
    res.json(promocion);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al cargar el promocion");
  }
};

//Eliminar promocion
exports.eliminarPromocion = async (req, res) => {
  try {
    let promocion = await Promocion.findById(req.params.id);
    if (!promocion) {
      res.status(404).json({ msg: "No existe el promocion" });
    }
    await Promocion.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "promocion Eliminado" });
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al eliminar el promocion");
  }
};
