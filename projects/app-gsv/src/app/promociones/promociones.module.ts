import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromocionesRoutingModule } from './promociones-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { FormComponent } from './components/form/form.component';
import { PromocionTableComponent } from './components/promocion-table/promocion-table.component';
import { PageListClientComponent } from './components/page-list-client/page-list-client.component';
import { PageListAdminComponent } from './components/page-list-admin/page-list-admin.component';
import { SharedModule } from '../shared/shared.module';
import { PromocionTableAdminComponent } from './components/promocion-table-admin/promocion-table-admin.component';

@NgModule({
  declarations: [
    PageListComponent,
    FormComponent,
    PromocionTableComponent,
    PageListClientComponent,
    PageListAdminComponent,
    PromocionTableAdminComponent,
  ],
  imports: [CommonModule, PromocionesRoutingModule, SharedModule],
  exports: [
    PromocionTableComponent,
    PageListClientComponent,
    PageListAdminComponent,
    PromocionTableAdminComponent,
  ],
})
export class PromocionesModule {}
