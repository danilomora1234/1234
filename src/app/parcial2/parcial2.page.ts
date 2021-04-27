import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parcial2',
  templateUrl: './parcial2.page.html',
  styleUrls: ['./parcial2.page.scss'],
})
export class PARCIAL2Page implements OnInit {
  X="";
  O="";
  j=2;
  i=0;
  jugador ="";
  jugador1= "JUGADOR 1";
  jugador2= "JUGADOR 2";
 
  espacios: string[];
  siguienteespacio: boolean;
  winner: string;
  empate= "EMPATE"
  constructor() { }

  ngOnInit() {
  }
  clickboton(i) {
    if(this.jugador){
      this.X = "x";}
  
  }
  
 combinaciones(){
    const lineas= [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }
  
   
    
  
  
  
  
}  

