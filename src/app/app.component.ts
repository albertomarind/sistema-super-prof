import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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

  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (result: any[]) => {
        console.log(result);
        let resultadoTransformado = result.map(r => {
          return {
            name: r.name,
            email: r.email
          }
        });
        console.log(resultadoTransformado);
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      },
      () => {
        console.log('Completado');
      }
    )
  }

}
