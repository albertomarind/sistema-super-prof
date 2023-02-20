import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from './usuario.service';
import { InformacionUsuarioComponent } from './informacion-usuario/informacion-usuario.component';
import { RouterModule } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { UsuarioRoutingModule } from './usuario-routing.module';



@NgModule({
  declarations: [
    ListaUsuariosComponent,
    InformacionUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ],
  providers: [
    UsuarioService
  ],
  exports: [
  ]
})
export class UsuarioModule { }
