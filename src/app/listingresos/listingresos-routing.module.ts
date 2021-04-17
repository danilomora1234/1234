import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingresosPage } from './listingresos.page';

const routes: Routes = [
  {
    path: '',
    component: ListingresosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingresosPageRoutingModule {}
