import { TestBed } from '@angular/core/testing';

import { ProductosPromiseService } from './productos-promise.service';

describe('ProductosPromiseService', () => {
  let service: ProductosPromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosPromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
