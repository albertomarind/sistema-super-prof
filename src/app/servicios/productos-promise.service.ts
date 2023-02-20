import {Injectable} from '@angular/core';

@Injectable()
export class ProductosPromiseService {

  constructor() {
  }

  getProducts(): Promise<any> {
    return new Promise((resolve, reject) => {
      const xhttp = new XMLHttpRequest();
      xhttp.onload = () => {
        if (xhttp.status >= 400) {
          reject('Error');
          //throw new Error('Ocurrio un error');
        }
        let response = JSON.parse(xhttp.responseText);
        resolve(response);
      };
      xhttp.open('GET', 'https://dummyjson.com/products');
      xhttp.send();
    });
  }
}
