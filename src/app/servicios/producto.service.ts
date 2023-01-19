import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductoService {

  constructor(private http: HttpClient) { }


  getProducts(): Observable<any> {
    return this.http.get<any>('https://dummyjson.com/products');
  }
}
