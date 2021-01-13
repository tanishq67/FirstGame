import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
   <button nbButton hero status="danger" *ngIf="!props.square"></button>
   <button nbButton hero status="warning" *ngIf="(props.square == 'X')&&(props.greenKaro === false)">{{ props.square }}</button>
   <button nbButton hero status="info" *ngIf="(props.square == 'O')&&(props.greenKaro === false)">{{ props.square }}</button>
   <button nbButton hero status="success" *ngIf="(props.square == 'X')&&(props.greenKaro === true)">{{ props.square }}</button>
   <button nbButton hero status="success" *ngIf="(props.square == 'O')&&(props.greenKaro === true)">{{ props.square }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent implements OnInit {
  @Input() props:{square: 'X' | 'O', greenKaro: true | false }
  
  constructor() { 
    this.props = {square: 'X', greenKaro : false};
    // this.props.value = 'X';
    // this.props.gren = false;
  }

  ngOnInit(): void {
  }

}
