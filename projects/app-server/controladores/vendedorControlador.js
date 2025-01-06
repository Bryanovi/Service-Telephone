const Vendedor = require("../modelos/vendedorModelo");

//Crear cliente
exports.crearVendedor = async (req, res) => {
  try {
    let vendedor;
    vendedor = new Vendedor(req.body);
    await vendedor.save();
    res.send(vendedor);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas en el registro del vendedor");
  }
};

//Obtener clientes
exports.obtenerVendedores = async (req, res) => {
  try {
    const vendedor = await Vendedor.find();
    res.json(vendedor);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al cargar los vendedor");
  }
};

//Actualizar cliente
exports.actualizarVendedor = async (req, res) => {
  try {
    const { nombresCompletos, fechaIngreso, direccion, celular } = req.body;
    let vendedor = await Vendedor.findById(req.params.id);
    if (!vendedor) {
      res.status(404).json({ msg: "No existe el Vendedor" });
    }

    vendedor.nombresCompletos = nombresCompletos;
    vendedor.fechaIngreso = fechaIngreso;
    vendedor.direccion = direccion;
    vendedor.celular = celular;

    vendedor = await Vendedor.findOneAndUpdate(
      { _id: req.params.id },
      vendedor,
      {
        new: true,
      }
    );

    res.json(vendedor);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al actualizar el vendedor");
  }
};

//Obtener cliente
exports.obtenerVendedor = async (req, res) => {
  try {
    let vendedor = await Vendedor.findById(req.params.id);
    if (!vendedor) {
      res.status(404).json({ msg: "No existe el vendedor" });
    }
    res.json(vendedor);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al cargar el vendedor");
  }
};

//Eliminar cliente
exports.eliminarVendedor = async (req, res) => {
  try {
    let vendedor = await Vendedor.findById(req.params.id);
    if (!vendedor) {
      res.status(404).json({ msg: "No existe el vendedor" });
    }
    await Vendedor.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Vendedor Eliminado" });
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al eliminar el Vendedor");
  }
};
