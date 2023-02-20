import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from './usuario.service';
import { InformacionUsuarioComponent } from './informacion-usuario/informacion-usuario.component';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

let routes: Routes = [
  {
    path: '', component: ListaUsuariosComponent
  },
  {
    path: ':id', component: InformacionUsuarioComponent
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsuarioRoutingModule { }
