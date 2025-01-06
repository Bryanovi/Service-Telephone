import { Component } from '@angular/core';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';
import { PromocionesService } from '../../services/promocion.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'gsv-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.css'],
})
export class PageListClientComponent {
  registros: any[] = [];
  metaDataColumns: MetaDataColumn[] = [
    { field: 'producto', title: 'PRODUCTO' },
    { field: 'descuento', title: 'DESCUENTO (%)' },
    { field: 'fechaInicio', title: 'FECHA DE INICIO' },
    { field: 'fechaFin', title: 'FECHA DE FINALIZACION' },
  ];

  data: any[] = [];
  totalRegistros = this.data.length;

  constructor(private promocionService: PromocionesService) {
    this.cargarRegistroCaja();
  }

  cargarRegistroCaja() {
    this.promocionService.cargarPromociones().subscribe((dataWeb) => {
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
