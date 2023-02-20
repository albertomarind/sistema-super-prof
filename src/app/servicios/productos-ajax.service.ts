import {Injectable} from '@angular/core';

@Injectable()
export class ProductosAjaxService {
  constructor() {
  }
  getProducts(callback: (param: any) => any): void {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = () => {
      let response = JSON.parse(xhttp.responseText);
      callback(response);
    };
    xhttp.open('GET', 'https://dummyjson.com/products');
    xhttp.send();
  }
}
