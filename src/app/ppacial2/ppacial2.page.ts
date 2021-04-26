import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ppacial2',
  templateUrl: './ppacial2.page.html',
  styleUrls: ['./ppacial2.page.scss'],
})
export class Ppacial2Page implements OnInit {
X="";
O="";
j=2;
i=0;
jugador= false;
jugador1= "JUGADOR 1";
jugador2= "JUGADOR 2";
  constructor(private navController: NavController) { }



  squares: string[];
  xIsNext: boolean;
  winner: string;
  empate= "EMPATE"
  ngOnInit() {
    this.nuevoJuego();
  }

  nuevoJuego() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    console.log('NUEVO JUEGO');
  }

  get player() {
    return this.xIsNext ? '1 : X' : '2 : O';
    
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
      console.log('JUGANDO');
      this.winner = this.calculateWinner();
    }else if(!this.squares[9]){
      console.log('EMPATE');
      this.empate="EMPATE";
    }

    
    
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
  


/*
ngOnInit() {
    
  }
async clickboton(){

}
  
X1(){
  if(this.X == ""){
    this.X ="X";
  }
  

}


O1(){
  this.O = 'O';
  
}*/
}
