import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ppacial2PageRoutingModule } from './ppacial2-routing.module';

import { Ppacial2Page } from './ppacial2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ppacial2PageRoutingModule
  ],
  declarations: [Ppacial2Page]
})
export class Ppacial2PageModule {}
