import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'gsv-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  titulo = '';

  formulario!: FormGroup;

  @Input() data!: any;
  @Output() formularioEnviado: EventEmitter<any> = new EventEmitter();
  @Output() formularioCerrado: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}
  ngOnInit(): void {
    console.log(this.data);
    this.cargarFormulario();
  }

  cargarFormulario() {
    this.formulario = new FormGroup({
      id: new FormControl(this.data?._id),
      marca: new FormControl(this.data?.marca, Validators.required),
      descripcion: new FormControl(this.data?.descripcion, Validators.required),
      precio: new FormControl(this.data?.precio, Validators.required),
    });
  }

  grabar() {
    if (this.formulario.valid) {
      const formData = this.formulario.value;
      console.log(formData);
      this.formularioEnviado.emit(formData);
    }
  }

  cerrarFormulario() {
    this.formularioCerrado.emit();
  }
}
