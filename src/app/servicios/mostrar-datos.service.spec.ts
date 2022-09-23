import { TestBed } from '@angular/core/testing';

import { MostrarDatosService } from './mostrar-datos.service';

describe('MostrarDatosService', () => {
  let service: MostrarDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostrarDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
