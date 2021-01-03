import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares : any[];
  x : boolean;
  win: string;


  constructor()  {
    this.x = true;
    this.win = "";
    this.squares =  Array(9).fill(null);
   }

  ngOnInit(): void {
    this.newgame();
  }
  newgame() {
    this.squares = Array(9).fill(null);
    this.win = "";
    this.x = true;
  }

  get player(){
    return this.x? 'X':'O';
  }
  move(idx:number){
    if(!this.squares[idx]){
      this.squares.splice(idx,1,this.player)
      this.x=!this.x;
    }
    this.win = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
