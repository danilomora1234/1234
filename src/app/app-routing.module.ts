import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'iniciooperaciones',
    loadChildren: () => import('./iniciooperaciones/iniciooperaciones.module').then( m => m.IniciooperacionesPageModule)
  },
  {
    path: 'saludo',
    loadChildren: () => import('./saludo/saludo.module').then( m => m.SaludoPageModule)
  },
  {
    path: 'calculadora',
    loadChildren: () => import('./calculadora/calculadora.module').then( m => m.CalculadoraPageModule)
  },
  {
    path: 'parcial',
    loadChildren: () => import('./parcial/parcial.module').then( m => m.PARCIALPageModule)
  },
  {
    path: 'storage',
    loadChildren: () => import('./storage/storage.module').then( m => m.StoragePageModule)
  },
  {
    path: 'control',
    loadChildren: () => import('./control/control.module').then( m => m.ControlPageModule)
  },
  {
    path: 'listgastos',
    loadChildren: () => import('./listgastos/listgastos.module').then( m => m.ListgastosPageModule)
  },
  {
    path: 'listingresos',
    loadChildren: () => import('./listingresos/listingresos.module').then( m => m.ListingresosPageModule)
  },
  {
    path: 'triqui',
    loadChildren: () => import('./triqui/triqui.module').then( m => m.TriquiPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
