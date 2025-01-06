export class Promociones {
  _id?: string;
  producto?: string;
  descuento?: Number;
  fechaInicio?: Date;
  fechaFin?: Date;

  constructor(
    producto?: string,
    descuento?: Number,
    fechaInicio?: Date,
    fechaFin?: Date
  ) {
    this.producto = producto;
    this.descuento = descuento;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
  }
}
