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
      id: 1,
      titulo: "titulo1",
      descripcion: "descripcion1",
      precio: 15.51,
      urlImage: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg'
    },
    {
      id: 2,
      titulo: "titulo2",
      descripcion: "descripcion2",
      precio: 15.52,
      urlImage: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg'
    },
    {
      id: 3,
      titulo: "titulo3",
      descripcion: "descripcion3",
      precio: 15.53,
      urlImage: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg'
    },
    {
      id: 1,
      titulo: "titulo1",
      descripcion: "descripcion1",
      precio: 15.51,
      urlImage: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg'
    },
    {
      id: 2,
      titulo: "titulo2",
      descripcion: "descripcion2",
      precio: 15.52,
      urlImage: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg'
    },
    {
      id: 3,
      titulo: "titulo3",
      descripcion: "descripcion3",
      precio: 15.53,
      urlImage: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg'
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
