import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CandidatService } from '../../services/candidat.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionCandidatRoutingModule } from './gestion-candidat-routing.module';
import { GestionCandidatComponent } from './gestion-candidat.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { FormationService } from '../../services/formation.service';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    GestionCandidatComponent,
    ListComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    GestionCandidatRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[CandidatService,FormationService]

})
export class GestionCandidatModule { }
