import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/models/producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  @Input() productosAgregados: Array<Producto>;

  @Input() totalCarrito: number = 0;

  constructor() {
    this.productosAgregados = [];
  }

  onDeleteProducto(item: Producto){
    if(item.agregados <= 1){
      this.productosAgregados = this.productosAgregados.filter(e => e.id != item.id);
    }
    item.agregados--;
  }

  calcularTotal():number {
    let resultado = 0;
    this.productosAgregados.map(e => resultado += parseInt(e.precio)*e.agregados);
    return resultado;
  }

  ngOnInit(): void {

  }

}
