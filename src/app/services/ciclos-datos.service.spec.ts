import { TestBed } from '@angular/core/testing';

import { CiclosDatosService } from './ciclos-datos.service';

describe('CiclosDatosService', () => {
  let service: CiclosDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiclosDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
