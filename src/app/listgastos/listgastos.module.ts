import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListgastosPageRoutingModule } from './listgastos-routing.module';

import { ListgastosPage } from './listgastos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListgastosPageRoutingModule
  ],
  declarations: [ListgastosPage]
})
export class ListgastosPageModule {}
