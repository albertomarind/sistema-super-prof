import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  productos:any[] = [
    {
      id:1,
      titulo:"titulo1",
      descripcion:"descripcion1",
      precio:15.51
    },
    {
      id:2,
      titulo:"titulo2",
      descripcion:"descripcion2",
      precio:15.52
    },
    {
      id:3,
      titulo:"titulo3",
      descripcion:"descripcion3",
      precio:15.53
    }
  ];
}
