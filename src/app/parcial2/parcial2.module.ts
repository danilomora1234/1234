import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PARCIAL2PageRoutingModule } from './parcial2-routing.module';

import { PARCIAL2Page } from './parcial2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PARCIAL2PageRoutingModule
  ],
  declarations: [PARCIAL2Page]
})
export class PARCIAL2PageModule {}
