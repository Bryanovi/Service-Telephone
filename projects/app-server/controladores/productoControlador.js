const Producto = require("../modelos/productoModelo");

//Crear cliente
exports.crearProducto = async (req, res) => {
  try {
    let producto;
    producto = new Producto(req.body);
    await producto.save();
    res.send(producto);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas en el registro del producto");
  }
};

//Obtener clientes
exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al cargar los productos");
  }
};

//Actualizar producto
exports.actualizarProducto = async (req, res) => {
  try {
    const { marca, descripcion, precio } = req.body;
    console.log(marca, descripcion, precio);
    let producto = await Producto.findById(req.params.id);
    if (!producto) {
      res.status(404).json({ msg: "No existe el producto" });
    }
    console.log(producto);
    producto.marca = marca;
    producto.descripcion = descripcion;
    producto.precio = precio;

    producto = await Producto.findOneAndUpdate(
      { _id: req.params.id },
      producto,
      {
        new: true,
      }
    );

    res.json(producto);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al actualizar el vendedor");
  }
};

//Obtener cliente
exports.obtenerProducto = async (req, res) => {
  try {
    let producto = await Producto.findById(req.params.id);
    if (!producto) {
      res.status(404).json({ msg: "No existe el producto" });
    }
    res.json(producto);
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al cargar el producto");
  }
};

//Eliminar cliente
exports.eliminarProducto = async (req, res) => {
  try {
    let producto = await Producto.findById(req.params.id);
    if (!producto) {
      res.status(404).json({ msg: "No existe el producto" });
    }
    await Producto.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "producto Eliminado" });
  } catch (e) {
    console.log(error);
    res.status(500).send("Hubo problemas al eliminar el cliente");
  }
};
