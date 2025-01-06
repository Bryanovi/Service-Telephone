import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'gsv-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() data!: any;

  formulario!: FormGroup;

  @Output() formularioEnviado: EventEmitter<any> = new EventEmitter();
  @Output() formularioCerrado: EventEmitter<void> = new EventEmitter<void>();
  maximo: number = 0;
  registroSeleccionado!: any;

  ngOnInit(): void {
    console.log('Registro producto');
    console.log(this.data);
    this.cargarFormulario();
  }

  cargarFormulario() {
    this.formulario = new FormGroup({
      // _id: new FormGroup(this.data?._id),
      producto: new FormControl(this.data?.producto, Validators.required),
      descuento: new FormControl(this.data?.descuento, Validators.required),
      fechaInicio: new FormControl(this.data?.fechaInicio, Validators.required),
      fechaFin: new FormControl(this.data?.fechaFin, Validators.required),
    });
  }

  grabar() {
    if (this.formulario.valid) {
      const formData = this.formulario.value;
      console.log(formData);
      this.formularioEnviado.emit(formData);
      this.formulario.reset();
    }
  }
  cerrarFormulario() {
    this.formularioCerrado.emit();
  }
}
interface Registro {
  _id: number;
  producto: string;
  descripcion: string;
  stock: number;
  precio: number;
}
