import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingresosPageRoutingModule } from './listingresos-routing.module';

import { ListingresosPage } from './listingresos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingresosPageRoutingModule
  ],
  declarations: [ListingresosPage]
})
export class ListingresosPageModule {}
