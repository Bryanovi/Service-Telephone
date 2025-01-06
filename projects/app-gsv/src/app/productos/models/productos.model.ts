export class Producto {
  _id?: string;
  producto?: string;
  descripcion?: string;
  precio?: Number;

  constructor(producto?: string, descripcion?: string, precio?: Number) {
    this.producto = producto;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}
