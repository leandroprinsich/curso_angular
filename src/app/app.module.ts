import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroComponent } from './components/libro/libro.component';
import { EscritorComponent } from './components/escritor/escritor.component';
import { ListaEscritorComponent } from './components/lista-escritor/lista-escritor.component';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    EscritorComponent,
    ListaEscritorComponent,
    ListaLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
