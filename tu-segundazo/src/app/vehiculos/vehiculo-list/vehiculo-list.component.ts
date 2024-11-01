import { VehiculoService } from './vehiculo.service';
import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrl: './vehiculo-list.component.css'
})
export class VehiculoListComponent implements OnInit {


  constructor(private vehiculoService:VehiculoService){}
  vehiculos:Array<Vehiculo>=[];
    getVehiculos(){
      this.vehiculoService.getVehiculos().subscribe(vehiculos=>{
        this.vehiculos=vehiculos;
        console.log('vehiculos', vehiculos)
      });
    }

ngOnInit(){
  this.getVehiculos();
}

}
