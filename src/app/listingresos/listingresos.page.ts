import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController,AlertController,LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-listingresos',
  templateUrl: './listingresos.page.html',
  styleUrls: ['./listingresos.page.scss'],
})
export class ListingresosPage implements OnInit {
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
 
  

  async guardarIngresos(x){
    if(this.ingresos==null){
      this.ingresos=[]
    }
      this.ingresos.push({
        nombre: this.nombre1 = this.nombre,
        descripcion: this.descripcion1 = this.descripcion,
        valor: this.valor1 = this.valor,
        fecha: this.fecha1 = this.fecha
      })
      await this.storage.set('ingresos',this.ingresos)

      this.sinDatos=true;
    //limpiando datos
    this.valor1="";
    this.fecha1="";
    this.nombre1="";
    this.descripcion1="";
    console.log(this.ingresos);
    console.log('INGRESOS');
      
    }
}
