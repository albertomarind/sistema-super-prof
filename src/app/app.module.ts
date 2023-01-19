import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ProductoService } from './servicios/producto.service';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { PostService } from './post.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  //Aqui van los componentes
  declarations: [
    AppComponent,
    CardComponent,
    ListaProductosComponent,
  ],
  //Aqui se importan los modulos
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    ProductoService,
    PostService
  ],
  //Aqui se agregan los servicios
  //Componente con el cual arranca la aplicacion

  bootstrap: [AppComponent]
})
export class AppModule { }
