import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicioCronometro';
  mensajeFinalizacion: string;
  constructor(){
    this.mensajeFinalizacion = '';
  }
  OnFinalizoEvent(){
    this.mensajeFinalizacion = "Press Start again!"
  }
}
