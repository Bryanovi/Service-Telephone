import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosModule } from './productos/productos.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'promocion',
    loadChildren: () =>
      import('./promociones/promociones.module').then(
        (m) => m.PromocionesModule
      ),
  },
  {
    path: 'producto',
    loadChildren: () =>
      import('./productos/productos.module').then((m) => m.ProductosModule),
  },
  {path: 'servicios', loadChildren:()=> import('./servicios/servicios.module').then((m)=>m.ServicioModule)},
  {path: 'contactos', loadChildren:()=> import('./contactos/contactos.module').then((m)=>m.ContactoModule)}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
