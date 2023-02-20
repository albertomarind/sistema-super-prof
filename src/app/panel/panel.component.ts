import {Component, ContentChildren, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input()
  titulo!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
