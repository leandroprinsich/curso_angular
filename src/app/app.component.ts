import { Component } from '@angular/core';
import { Tarea } from 'src/models/Tarea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaTareas: Array<Tarea>;

  constructor(){
    this.listaTareas = [];
  }

  OnFormularioEnviado(tarea:any){
    this.listaTareas.push(tarea)
  }

}
