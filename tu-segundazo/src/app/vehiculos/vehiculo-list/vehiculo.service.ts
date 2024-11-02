import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private apiUrl: string= environment.baseUrl;

  constructor(private http: HttpClient) {}

  getVehiculos(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(this.apiUrl);
  }
}
