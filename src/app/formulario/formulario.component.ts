import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/models/Tarea';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  tarea: Tarea;
  id: number;
  @Output() formularioEnviado: EventEmitter<Tarea>;
  constructor() {
    this.id = 0;
    this.tarea = new Tarea();
    this.formularioEnviado = new EventEmitter();
  }
  enviarFormulario(){
    this.tarea.id =  this.id;
    this.id++;
    this.formularioEnviado.emit(this.tarea);
    // this.tarea.clearTarea();
    this.tarea = new Tarea();

  }
  ngOnInit(): void {
  }

}
