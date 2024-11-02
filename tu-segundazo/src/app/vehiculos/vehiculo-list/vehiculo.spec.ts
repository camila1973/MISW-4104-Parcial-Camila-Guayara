import { Vehiculo } from '../vehiculo';

describe('Vehiculo', () => {
  it('should create an instance', () => {
    const vehiculo = new Vehiculo(1, 'Toyota', 'Corolla', 'XLI', 2020, 20000, 'Rojo', 'toyota.jpg');
    expect(vehiculo).toBeTruthy();
  });
});
