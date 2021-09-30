import { Component } from '@angular/core';
import { Producto } from 'src/models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaProductosParaLaCompra: Array<Producto>;
  listaProductosAgregados: Array<Producto>;

  constructor(){
    this.listaProductosParaLaCompra = [];
    this.listaProductosAgregados = [];
  }
  onProductoCreado(producto:Producto){
    this.listaProductosParaLaCompra.push(producto);
  }
  onBotonClickeado(event: any){
    if(event.nombreBoton == 'COMPRAR'){
      this.listaProductosParaLaCompra = this.listaProductosParaLaCompra.filter(e => e.id != event.producto.id);
      this.listaProductosAgregados.push(event.producto);
    }
    else{
      this.listaProductosAgregados = this.listaProductosAgregados.filter(e => e.id != event.producto.id);
      this.listaProductosParaLaCompra.push(event.producto);
    }
  }
}
