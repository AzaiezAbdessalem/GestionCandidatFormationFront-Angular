import { FormationService } from './../../services/formation.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestionFormationRoutingModule } from './gestion-formation-routing.module';
import { GestionFormationComponent } from './gestion-formation.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestionFormationComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GestionFormationRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers : [FormationService]
})

export class GestionFormationModule { }
