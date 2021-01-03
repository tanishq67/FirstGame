import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
   <button *ngIf="!value"> {{value}} </button>
   <button status="success" *ngIf="value == 'X'">{{ value }}</button>
   <button status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent implements OnInit {
  @Input() value: 'X' | 'O'
  constructor() { 
    this.value = 'X';
  }

  ngOnInit(): void {
  }

}
