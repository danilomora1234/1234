import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ppacial2Page } from './ppacial2.page';

const routes: Routes = [
  {
    path: '',
    component: Ppacial2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ppacial2PageRoutingModule {}
