import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {
  productosTitulos: any[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProducts().subscribe(
      (respuesta) => {
        let productosTitulos = respuesta.products.map((producto: any) => {
          return {
            titulo: producto.title,
            precio: producto.price,
            cantidad: producto.stock,
            seleccionado: false,
            descuento:producto.discountPercentage
          }
        });
        this.productosTitulos = productosTitulos;
        //console.log(productosTitulos);
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      },
      () => {
        console.log("respuesta completada");
      }
    )
  }

  mostrar(titulo: any) {
    alert(titulo);
  }

  seleccionar(producto: any, indice: number) {
    let productoEncontrado = this.productosTitulos.find(producto => producto.seleccionado);
    if (productoEncontrado) {
      productoEncontrado.seleccionado = false;
    }
    producto.seleccionado = true;

  }



}
