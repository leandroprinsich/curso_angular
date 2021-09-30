import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/models/producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  @Input() listaProductos: Array<Producto>;
  @Input() nombreBoton: string;
  @Output() botonClickeado: EventEmitter<object>;
  constructor() {
    this.botonClickeado = new EventEmitter();
    this.listaProductos = [];
    this.nombreBoton = '';
  }

  onClickAccion(prod: Producto){
    let info = {
      nombreBoton: this.nombreBoton,
      producto : prod
    }
    this.botonClickeado.emit(info)
  }
  ngOnInit(): void {
  }

}
