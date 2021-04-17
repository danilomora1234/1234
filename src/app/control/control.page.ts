import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController,AlertController,LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-control',
  templateUrl: './control.page.html',
  styleUrls: ['./control.page.scss'],
})
export class ControlPage implements OnInit {
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

    async borrarDatos(){
      this.ingresos=[]
      await this.storage.remove('ingresos')
      this.gastos=[]
      await this.storage.remove('gastos')
      console.log('borrando')
    }
}
