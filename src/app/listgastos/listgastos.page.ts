import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController,AlertController,LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-listgastos',
  templateUrl: './listgastos.page.html',
  styleUrls: ['./listgastos.page.scss'],
})
export class ListgastosPage implements OnInit {
  nombre="";
  descripcion="";
  valor="";
  fecha="";
  nombre1="";
  descripcion1="";
  valor1="";
  fecha1="";
  clave1=" ";
  ingresos=[];
  gastos=[];
 sinDatos:boolean=false;
 
   constructor(private storage: Storage, public alertController: AlertController, loadingController: LoadingController) { }
 
 async ngOnInit(){
     await this.storage.create( ) 
     this.ingresos=await this.storage.get('ingresos')//base de datos
     this.gastos=await this.storage.get('gastos')
   }
  async guardarGastos(i){
    if(this.gastos==null){
      this.gastos=[]
    }
    this.gastos.push({
      nombre: this.nombre,
      descripcion: this.descripcion,
      valor: this.valor,
      fecha: this.fecha
    })
    
    await this.storage.set('gastos',this.gastos)
   
    this.sinDatos=true;
    //limpiando datos
    this.valor="";
    this.fecha="";
    this.nombre="";
    this.descripcion="";
   
  console.log(this.gastos);
  
    }

}
