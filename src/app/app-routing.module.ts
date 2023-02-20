import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ProductoService } from './servicios/producto.service';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { PostService } from './post.service';
import { HttpClientModule } from '@angular/common/http';
import { SelectorDiasSemanaComponent } from './selector-dias-semana/selector-dias-semana.component';
import { UsuarioModule } from './usuario/usuario.module';
import { RouterModule, Routes } from '@angular/router';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { InformacionUsuarioComponent } from './usuario/informacion-usuario/informacion-usuario.component';
import { ListaUsuariosComponent } from './usuario/lista-usuarios/lista-usuarios.component';
import { ListaRolesComponent } from './roles/lista-roles/lista-roles.component';
import { AltaRolComponent } from './roles/alta-rol/alta-rol.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'usuarios',
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
  },
  {
    path: 'productos', component: ListaProductosComponent
  },
  {
    path: 'roles', component: ListaRolesComponent
  },
  {
    path: 'alta-rol', component: AltaRolComponent
  },
  {
    path: 'pagina-no-encontrada', component: PaginaNoEncontradaComponent
  },
  {
    path: '**', component: PaginaNoEncontradaComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
