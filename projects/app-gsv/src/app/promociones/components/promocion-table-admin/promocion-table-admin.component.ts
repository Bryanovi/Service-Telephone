import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import Swal from 'sweetalert2';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';

@Component({
  selector: 'gsv-promocion-table-admin',
  templateUrl: './promocion-table-admin.component.html',
  styleUrls: ['./promocion-table-admin.component.css'],
})
export class PromocionTableAdminComponent {
  @Input() data: any;
  @Input() metaDataColumns!: MetaDataColumn[];
  @Input() title: any;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClickEliminar: EventEmitter<any> = new EventEmitter<any>();

  columns: string[] = [];

  @ContentChildren(MatColumnDef, { descendants: true })
  columnsDef!: QueryList<MatColumnDef>;
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['metaDataColumns']) {
      this.columns = this.metaDataColumns.map((x) => x.field);
    }
  }

  accionEliminar(id: any) {
    Swal.fire({
      title: '¿Está seguro que desea eliminar este elemento?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Código para eliminar el elemento
        this.onClickEliminar.emit(id);
        return;
      }
    });
  }
}
