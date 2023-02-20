import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {DiaSemana} from './models/dia-semana';
import {PostService} from './post.service';
import {UsuarioService} from './usuario/usuario.service';
import {ProductosAjaxService} from "./servicios/productos-ajax.service";
import {ProductosPromiseService} from "./servicios/productos-promise.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    ProductosAjaxService,
    ProductosPromiseService
  ]
})
export class AppComponent implements OnInit {

  productos: any[] = [
    {
      photo: "il_1588xN.3887088758_lsyp.webp",
      id: 1,
      titulo: "Tapete blanco",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      precio: 150.51
    },
    {
      photo: "il_1588xN.2808450734_otuo.jpg",
      id: 2,
      titulo: "Set de vasos",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      precio: 15.52
    },
    {
      photo: "il_680x540.4463338703_b66q.avif",
      id: 3,
      titulo: "set de tazas",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      precio: 20.53
    },
    {
      photo: "il_1588xN.3887088758_lsyp.webp",
      id: 1,
      titulo: "Tapete blanco",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      precio: 150.51
    },
    {
      photo: "il_1588xN.2808450734_otuo.jpg",
      id: 2,
      titulo: "Set de vasos",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      precio: 15.52
    },
    {
      photo: "il_680x540.4463338703_b66q.avif",
      id: 3,
      titulo: "set de tazas",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      precio: 20.53
    }
  ];

  constructor(
    private postService: PostService,
    private productosAjaxService: ProductosAjaxService,
    private productosPromiseService: ProductosPromiseService
  ) {
  }

  ngOnInit(): void {

    // this.productosAjaxService.getProducts((response) => {
    //   console.log(response);
    // });

    this.productosPromiseService.getProducts().then(
      (response) => {
        console.log(response);
      }
    ).catch((error) => {
      console.error(error);
    }).finally(() => {
      console.log('Completado')
    });

    this.postService.getPosts().subscribe(
      (result: any[]) => {
        //console.log(result);
        let resultadoTransformado = result.map(r => {
          return {
            name: r.name,
            email: r.email
          }
        });
        //console.log(resultadoTransformado);
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      },
      () => {
        //console.log('Completado');
      }
    )
  }


  mostrarDiaSeleccionado(diaSeleccionado: DiaSemana) {
    console.log(diaSeleccionado.id);
  }

}
