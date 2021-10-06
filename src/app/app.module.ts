import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormEmpleadoComponent } from './components/form-empleado/form-empleado.component';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    FormEmpleadoComponent,
    ListEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
