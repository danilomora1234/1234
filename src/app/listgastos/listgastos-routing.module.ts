import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListgastosPage } from './listgastos.page';

const routes: Routes = [
  {
    path: '',
    component: ListgastosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListgastosPageRoutingModule {}
