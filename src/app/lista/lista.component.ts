import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/models/Tarea';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() lista: Array<Tarea>;
  // @Output() deleteTarea: EventEmitter<string>;

  constructor() {
    this.lista = [];
    // this.deleteTarea = new EventEmitter();
  }

  // OnClickDelete(id:any){
  //   this.deleteTarea.emit(id);
  // }

  OnClickComplete(oTarea: Tarea){
    // this.lista.map((e)=>{
    //   if(e.id == id){
    //     e.completa = !e.completa;
    //   }
    // })
    oTarea.completa = !oTarea.completa;
  }
  // OnClickDelete(id:any){
  //   const resto = this.lista.filter(element => element.id != id);
  //   this.lista = resto;
  // }
  OnClickDelete(arrayIndex:any){
    this.lista.splice(arrayIndex,1);
  }

  ngOnInit(): void {
    console.log("Lo uso para lanzar acciones que arrancan el componente")
  }

  ngAfterViewInit(){
    console.log("Lo uso para lanzar acciones iniciales dentro de la plantilla");
  }

}
