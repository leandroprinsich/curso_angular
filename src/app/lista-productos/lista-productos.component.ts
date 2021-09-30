import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/models/producto';
import { ProductoComponent } from '../producto/producto.component';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  @Input() category: string = '';
  @Input() listaProductos: Array<Producto>;
  @Output() productoAgregado: EventEmitter<Producto>;
  constructor() {
    this.productoAgregado = new EventEmitter();
    this.listaProductos = [];
  }

  onClickAddProducto(pProducto: Producto){
    this.productoAgregado.emit(pProducto);
  }

  ngOnInit(): void {
  }

}
