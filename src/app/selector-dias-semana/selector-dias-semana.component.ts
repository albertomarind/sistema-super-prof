import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DiaSemana } from '../models/dia-semana';

@Component({
  selector: 'app-selector-dias-semana',
  templateUrl: './selector-dias-semana.component.html',
  styleUrls: ['./selector-dias-semana.component.scss']
})
export class SelectorDiasSemanaComponent implements OnInit {

  @Output()
  diaSeleccionadoEvent: EventEmitter<DiaSemana> = new EventEmitter<DiaSemana>();

  diasSemana: DiaSemana[] = [
    {
      id: 0,
      caracter: 'L',
      seleccionado: false
    },
    {
      id: 1,
      caracter: 'M',
      seleccionado: false
    },
    {
      id: 2,
      caracter: 'Mi',
      seleccionado: false
    },
    {
      id: 3,
      caracter: 'J',
      seleccionado: false
    },
    {
      id: 4,
      caracter: 'V',
      seleccionado: false
    },
    {
      id: 5,
      caracter: 'S',
      seleccionado: false
    },
    {
      id: 6,
      caracter: 'D',
      seleccionado: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(diaSemanaSeleccionado: DiaSemana) {
    let diaSeleccionado = this.diasSemana.find((diaSemana)=>diaSemana['seleccionado']);
    if(diaSeleccionado){
      diaSeleccionado['seleccionado'] = false;
    }
    diaSemanaSeleccionado['seleccionado'] = true;

    this.diaSeleccionadoEvent.emit(diaSemanaSeleccionado);
  }

}
