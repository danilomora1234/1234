import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
})
export class StoragePage implements OnInit {
  
  textoAlmacenado= '';
  
  constructor(private storage: Storage) { }

  async ngOnInit() {
    
    await this.storage.create();
    this.textoAlmacenado = await this.storage.get('textoAlmacenado')

    


    /*
    //get => me devuelve una clave especifica
    //set => inserta una clave especifica
    // remove => Elimina una clave especifica
    // clave = datos-valor
    await this.storage.set ('nombre','danilo') //('clave', 'valor')
    await this.storage.set ('apellido','mora')

    let personas =[
     {nombre: "danilo",
     apellido: "mora",},

     {nombre: "jorge",
     apellido: "mavisoy",},
      
    ]
    await this.storage.set('personas',personas)

    console.log(await this.storage.get('nombre')) //clave especifica
    console.log(await this.storage.get('apellido'))

    let nuevas_personas = await this.storage.get('personas')
    console.log(nuevas_personas);

    await this.storage.remove('personas')
    console.log("eliminado");*/
  }
  async guardarDato() {
    await this.storage.set('textoAlmacenado', this.textoAlmacenado);
    console.log(this.textoAlmacenado);
  }
  
  
}