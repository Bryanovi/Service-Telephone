import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'gsv-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.css'],
})
export class PageListClientComponent {
  registros: any[] = [];
  metaDataColumns: MetaDataColumn[] = [
    //{ field: '_id', title: 'ID' },
    { field: 'marca', title: 'MARCA' },
    { field: 'descripcion', title: 'DESCRIPCION' },
    { field: 'precio', title: 'PRECIO' },
  ];

  data: any[] = [];
  totalRegistros = this.data.length;

  constructor(private productoService: ProductoService) {
    this.cargarRegistroCaja();
  }

  cargarRegistroCaja() {
    this.productoService.cargarProductos().subscribe((dataWeb) => {
      this.registros = dataWeb;
      this.totalRegistros = this.registros.length;
      this.changePage(0);
    });
  }

  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const salto = pageSize * page;
    this.data = this.registros.slice(salto, salto + pageSize);
  }
}
