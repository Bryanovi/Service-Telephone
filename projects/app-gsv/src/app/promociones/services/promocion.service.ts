import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promociones } from '../models/promociones.models';

@Injectable({
  providedIn: 'root',
})
export class PromocionesService {
  url = '/api/promociones/';
  constructor(private http: HttpClient) {}

  cargarPromociones(): Observable<any> {
    return this.http.get(this.url);
  }

  cargarPromocion(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  registrarPromocion(cliente: Promociones): Observable<any> {
    return this.http.post(this.url, cliente);
  }

  actualizarPromocion(id: string, cliente: Promociones): Observable<any> {
    return this.http.put(this.url + id, cliente);
  }

  eliminarProduccion(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
