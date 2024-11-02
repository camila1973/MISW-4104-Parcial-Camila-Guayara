import { VehiculoService } from './vehiculo.service';
import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrl: './vehiculo-list.component.css'
})
export class VehiculoListComponent implements OnInit {

  totales: { [key: string]: number } = {};

  constructor(private vehiculoService:VehiculoService){}
  vehiculos:Array<Vehiculo>=[];
    getVehiculos(){
      this.vehiculoService.getVehiculos().subscribe(vehiculos=>{
        this.vehiculos=vehiculos;
        this.calcularTotalesPorMarca();
        console.log('vehiculos', vehiculos)
      });
    }

    calcularTotalesPorMarca() {
      this.totales = this.vehiculos.reduce((acc:{ [key: string]: number }, vehiculo) => {
        acc[vehiculo.marca] = (acc[vehiculo.marca] || 0) + 1;
        return acc
      }, {});
    }

ngOnInit(){
  this.getVehiculos();
}

  getMarcas(): string[] {
    return Object.keys(this.totales);
  }

}
