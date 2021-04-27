import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PARCIAL2Page } from './parcial2.page';

const routes: Routes = [
  {
    path: '',
    component: PARCIAL2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PARCIAL2PageRoutingModule {}
