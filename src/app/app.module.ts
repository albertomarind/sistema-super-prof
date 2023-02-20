import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CardComponent} from './card/card.component';
import {ProductoService} from './servicios/producto.service';
import {ListaProductosComponent} from './lista-productos/lista-productos.component';
import {PostService} from './post.service';
import {HttpClientModule} from '@angular/common/http';
import {SelectorDiasSemanaComponent} from './selector-dias-semana/selector-dias-semana.component';
import {UsuarioModule} from './usuario/usuario.module';
import {RouterModule} from '@angular/router';
import {TopNavbarComponent} from './top-navbar/top-navbar.component';
import {MenuSidebarComponent} from './menu-sidebar/menu-sidebar.component';
import {PaginaNoEncontradaComponent} from './pagina-no-encontrada/pagina-no-encontrada.component';
import {InformacionUsuarioComponent} from './usuario/informacion-usuario/informacion-usuario.component';
import {ListaUsuariosComponent} from './usuario/lista-usuarios/lista-usuarios.component';
import {AppRoutingModule} from './app-routing.module';
import {UsuarioService} from './usuario/usuario.service';
import {RolesModule} from './roles/roles.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PanelComponent} from './panel/panel.component';
import {ProductosComponent} from './productos/productos.component';
import {ProductosAjaxService} from "./servicios/productos-ajax.service";


@NgModule({
  //Aqui van los componentes
  declarations: [
    AppComponent,
    CardComponent,
    ListaProductosComponent,
    SelectorDiasSemanaComponent,
    TopNavbarComponent,
    MenuSidebarComponent,
    PaginaNoEncontradaComponent,
    PanelComponent,
    ProductosComponent
  ],
  //Aqui se importan los modulos
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RolesModule
  ],
  providers: [
    ProductoService,
    PostService,
    ProductosAjaxService
  ],
  //Aqui se agregan los servicios
  //Componente con el cual arranca la aplicacion

  bootstrap: [AppComponent]
})
export class AppModule {
}
