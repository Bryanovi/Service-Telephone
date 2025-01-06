import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { environment } from '../../../environments/environment';
import { KeypadButton } from '../../../shared/interfaces/keypadButton.interface';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'gsv-page-list-admin',
  templateUrl: './page-list-admin.component.html',
  styleUrls: ['./page-list-admin.component.css'],
})
export class PageListAdminComponent {
  registros: any[] = [
    {
      _id: 1,
      nombresCompletos: 'Juan Pérez',
      correoElectronico: 'juan.perez@mail.com',
      direccion: 'Av. Quito',
      celular: '0991234567',
    },
  ];
  title: string = 'CLIENTES';
  // El formulario es para poder abrir o cerrar el componente form
  formulario!: boolean;

  fila!: any;

  metaDataColumns: MetaDataColumn[] = [
    { field: '_id', title: 'ID' },
    { field: 'marca', title: 'MARCA' },
    { field: 'descripcion', title: 'DESCRIPCION' },
    { field: 'precio', title: 'PRECIO' },
  ];

  keypadButtons: KeypadButton[] = [
    { icon: 'fa-solid fa-plus', color: 'btn-primary', accion: 'NUEVO' },
  ];

  data: any[] = [];
  totalRegistros = this.data.length;

  constructor(private productoService: ProductoService) {
    this.cargarClientes('');
  }

  cargarClientes(buscar: string) {
    /* this.data = this.registros;
    this.totalRegistros = this.data.length;
    this.changePage(0);*/

    this.productoService.cargarProductos().subscribe((dataWeb) => {
      this.registros = dataWeb;
      if (buscar) {
        console.log(buscar);
        this.registros = this.registros.filter((registro) =>
          registro.nombresCompletos.toLowerCase().includes(buscar.toLowerCase())
        );
        console.log(this.registros);
      }
      this.totalRegistros = this.registros.length;
      this.changePage(0);
    });
  }

  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const salto = pageSize * page;
    this.data = this.registros.slice(salto, salto + pageSize);
  }

  enviarAccion(accion: string) {
    switch (accion) {
      case 'DOWNLOAD':
        break;
      case 'NUEVO':
        this.formulario = true;
        this.abrirFormulario();
        break;
    }
  }

  accionEditar(row: any) {
    this.formulario = true;
    this.abrirFormulario(row);
  }

  accionEliminar(id: any) {
    console.log('Entro a pagelis');
    this.productoService.eliminarProducto(id).subscribe(() => {
      this.cargarClientes('');
    });
  }

  buscarData(searchData: any) {
    console.log(searchData);
    this.cargarClientes(searchData.terminoBusqueda);
  }

  grabarFormulario(formData: any) {
    if (!formData) {
      this.formulario = false;
      return;
    }
    if (formData.id) {
      const cliente = { ...formData };
      console.log('Entro al ID');
      console.log(cliente);
      this.productoService
        .actualizarProducto(formData.id, cliente)
        .subscribe(() => {
          this.cargarClientes('');
          this.formulario = false;
          this.mostrarMensajeActualizacion();
        });
    } else {
      const cliente = { ...formData };
      this.productoService.registrarProducto(cliente).subscribe(() => {
        console.log('Dentro regsitrar');
        console.log(cliente);
        this.cargarClientes('');
        this.formulario = false;
        this.mostrarMensajeAñadir();
      });
    }
  }

  abrirFormulario(fila: any = null) {
    this.fila = fila;
  }

  cerrarFormulario() {
    this.formulario = false;
  }

  mostrarMensajeActualizacion(): void {
    Swal.fire({
      title: 'Registro actulaizado',
      icon: 'info',
      timer: 3000,
      showConfirmButton: false,
    });
  }

  mostrarMensajeAñadir(): void {
    Swal.fire({
      title: 'Registro añadido',
      icon: 'info',
      timer: 3000,
      showConfirmButton: false,
    });
  }
}
