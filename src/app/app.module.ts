import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductoService } from './servicios/producto.service';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListaProductosComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    ProductoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
