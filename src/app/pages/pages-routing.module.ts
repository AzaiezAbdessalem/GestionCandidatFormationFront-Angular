import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: PagesComponent,
    children:[
      {
        path:'formations',
        loadChildren: ()=>import("./gestion-formation/gestion-formation.module").then((m)=>m.GestionFormationModule)
      },
      {
        path:'candidats',
        loadChildren: ()=>import("./gestion-candidat/gestion-candidat.module").then((m)=>m.GestionCandidatModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
