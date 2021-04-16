import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController,AlertController,LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-control',
  templateUrl: './control.page.html',
  styleUrls: ['./control.page.scss'],
})
export class ControlPage implements OnInit {
 nombre=null;
 descripcion=null;
 valor=null;
 fecha=null;

 ingresos=[];
 gastos=[];
sinDatos:boolean=false;

  constructor(private storage: Storage, public alertController: AlertController, loadingController: LoadingController) { }

async ngOnInit(){
    
  }


 /*async anadirIngresos(x){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'INGRESOS',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
         
          placeholder: 'nombre'
          
        },
        {
          name: 'descripcion',
          id: 'paragraph',
          type: 'textarea',
          
          placeholder: 'descripcion'
        },
        // input date with min & max
        {
          name: 'fecha',
          type: 'date',
          
          min: '2000-03-01',
          max: '20021-01-12'
        },
        // input date without min nor max
        {
          name: 'name7',
          type: 'number',
          
          placeholder: '00000'
        },
        
      ],
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'AÑADIR',
          handler: añadir => {
            
            
            this.nombre[x].nombre = añadir.nombre1
            this.descripcion[x].descripcion = añadir.descripcion1
            this.fecha[x].fecha = añadir.fecha1
            this.valor[x].valor = añadir.valor1
           
          }
        }
      ]
    });

    await alert.present();
  }*/



  async guardarGastos(i){
    this.gastos.push({
      nombre: this.nombre
      
    })
  
    this.gastos.push({
      descripcion: this.descripcion
    })
  
    this.gastos.push({
      valor: this.valor
    })
  
    this.gastos.push({
      fecha: this.fecha
    })
    this.sinDatos=true;
    //limpiando datos
    this.valor="";
    this.fecha="";
    this.nombre="";
    this.descripcion="";
   
  console.log("guardando gastos");
    
    }
    guardarIngresos(x){
      this.ingresos.push({
        nombre: this.nombre
        
      })
    
      this.ingresos.push({
        descripcion: this.descripcion
      })
    
      this.ingresos.push({
        valor: this.valor
      })
    
      this.ingresos.push({
        fecha: this.fecha
      })
      this.sinDatos=true;
    //limpiando datos
    this.valor="";
    this.fecha="";
    this.nombre="";
    this.descripcion="";
    console.log("guardando ingresos");
      
    }
}
