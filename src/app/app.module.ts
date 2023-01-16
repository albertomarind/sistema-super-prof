import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {HttpClientModule} from '@angular/common/http';
import { PostService } from './post.service';


@NgModule({
  //Aqui van los componentes
  declarations: [
    AppComponent,
    CardComponent
  ],
  //Aqui se importan los modulos
  imports: [
    BrowserModule,
    HttpClientModule //Modulo para poder utilizar un cliente HTTP
  ],
  //Aqui se agregan los servicios
  providers: [PostService],
  //Componente con el cual arranca la aplicacion
  bootstrap: [AppComponent]
})
export class AppModule { }
