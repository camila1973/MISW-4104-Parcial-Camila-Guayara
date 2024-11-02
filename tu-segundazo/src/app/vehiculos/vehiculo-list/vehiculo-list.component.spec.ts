import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculoListComponent } from './vehiculo-list.component';
import { VehiculoService } from './vehiculo.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let mockVehiculoService: jasmine.SpyObj<VehiculoService>;

  beforeEach(async () => {
    // Crear un mock de VehiculoService
    const vehiculosMock: Vehiculo[] = [
      { id: 1, marca: 'Renault', linea: 'Twingo', referencia: 'qe', modelo: 2020, kilometraje: 20000, color: 'Rojo', imagen: 'toyota.jpg' },
      { id: 2, marca: 'BMW', linea: 'ix', referencia: 'Advance', modelo: 2019, kilometraje: 30000, color: 'Azul', imagen: 'nissan.jpg' },
      { id: 3, marca: 'Mazda', linea: '3', referencia: 'Touring', modelo: 2021, kilometraje: 15000, color: 'Blanco', imagen: 'mazda.jpg' }
    ];

    mockVehiculoService = jasmine.createSpyObj('VehiculoService', ['getVehiculos']);
    mockVehiculoService.getVehiculos.and.returnValue(of(vehiculosMock));

    console.log(vehiculosMock)

    await TestBed.configureTestingModule({
      declarations: [VehiculoListComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: VehiculoService, useValue: mockVehiculoService }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear la tabla con tres filas más el encabezado', () => {

    expect(mockVehiculoService.getVehiculos).toHaveBeenCalled();


    const tableRows = fixture.debugElement.queryAll(By.css('tbody tr'));


    expect(tableRows.length).toBe(3);


    const tableHeader = fixture.debugElement.queryAll(By.css('thead tr'));
    expect(tableHeader.length).toBe(1);
  });
});
