import { TestBed } from '@angular/core/testing';

import { ProductosAjaxService } from './productos-ajax.service';

describe('ProductosAjaxService', () => {
  let service: ProductosAjaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosAjaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
