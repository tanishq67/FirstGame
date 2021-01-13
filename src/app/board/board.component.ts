import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares : {square: any, greenKaro : boolean}[];
  x : boolean;
  win: string;
  // greenKaro : boolean[];

  constructor()  {
    this.x = true;
    this.win = "";
    this.squares =  Array(9).fill({square: null, greenKaro: false});
    // this.greenKaro = Array(9).fill(false);
   }

  ngOnInit(): void {
    this.newgame();
  }
  newgame() {
    this.squares = Array(9).fill({square: null, greenKaro: false});
    this.win = "";
    this.x = true;
    // this.greenKaro = Array(9).fill(false);
  }

  get player(){
    return this.x? 'X':'O';
  }
  move(idx:number){
    if(!this.squares[idx].square){
      this.squares.splice(idx,1,{square: this.player,greenKaro: false})
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
        this.squares[a].square &&
        this.squares[a].square === this.squares[b].square &&
        this.squares[a].square === this.squares[c].square
      ) {
        this.squares[a].greenKaro=this.squares[b].greenKaro=this.squares[c].greenKaro=true;
        return this.squares[a].square;
      }
    }
    return null;
  }
}
