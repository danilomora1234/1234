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

jugador1= "JUGADOR 1";
jugador2= "JUGADOR 2";
  constructor(private navController: NavController) { }



  espacios: string[];
  siguienteespacio: boolean;
  ganador: string;
  empate= "EMPATE"
 
  ngOnInit() {
    this.nuevoJuego();
  }

  nuevoJuego() {
    this.espacios = Array(9).fill(null);
    this.ganador = null;
    this.siguienteespacio = true;
    console.log('NUEVO JUEGO');
  }

  get jugador() { //funcion que intercala el jugador X O
    return this.siguienteespacio ? '1  X' : '2   O';
    
  }

  moviMiento(idx: number) {//esta funcion se encarga de los movimientos
    if (!this.espacios[idx]) { //si el espacio esta vacio lo marca con el siguiente jugador x o
      this.espacios.splice(idx, 1, this.jugador);//esta parte verifica la union de las combinaciones
      this.siguienteespacio = !this.siguienteespacio;//esta parte verifica si el espacio esta vacio en el caso que no lo marca con el jugador correspondiente
      console.log('JUGANDO');
      this.ganador = this.resultadoGanador();//esta variable almacena el ganador por que this, winner es igual a callculaterwinner. winner esta definido como string entonces este toma el valor de la combinacion ganadora
      
    }else if(!this.espacios[9] ){//en el caso de ser empate. !this.espacios es igual a 9, osea todos los espacios llenos sin ninguna combinacion ganadora sera igual a empate
      console.log('EMPATE');
      this.ganador=this.empate;//la variable this. winner toma el valor del this.empate="empate"
      
     
    }
    
    
  }

  resultadoGanador() {//esta funcion define el ganador o el empate 
    const combinaciones = [// esta constatnte se encarga de la combinaciones filas y columnas y encuentra esas combinaciones del ganador o empate
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < combinaciones.length; i++) {//es if se encarga de verificar cada fila y columna con sus repectivas combinaciones, repite le procedimiento hasta que encuentra el ganador o el empate
      const [a, b, c] = combinaciones[i];
      if (
        this.espacios[a] &&
        this.espacios[a] === this.espacios[b] &&
        this.espacios[a] === this.espacios[c]
        
      ) {
        return this.espacios[a]; 
        
        
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
