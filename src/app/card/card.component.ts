import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  id: number = 0;

  @Input()
  titulo: string = '';

  @Input()
  descripcion: string = '';

  @Input()
  precio: number = 0;

  @Input()
  photo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
