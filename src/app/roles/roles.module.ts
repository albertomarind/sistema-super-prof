import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaRolesComponent } from './lista-roles/lista-roles.component';
import { AltaRolComponent } from './alta-rol/alta-rol.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListaRolesComponent,
    AltaRolComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    ListaRolesComponent,
    AltaRolComponent
  ]
})
export class RolesModule { }
