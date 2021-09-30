import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { Producto } from 'src/models/producto';
import fuente from './fuenteDatos/fuente.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aBebidas: Array<Producto>;
  aComidas: Array<Producto>;
  productosAgregados: Array<Producto>;

  constructor(){
    this.productosAgregados = [];
    this.aBebidas = fuente.filter(e => e.categoria == "BEBIDA");
    this.aComidas = fuente.filter(e => e.categoria == "COMIDA");
  }

  onProductoAgregado(prod:any){
    let repetido = this.productosAgregados.includes(prod)
    if(!repetido){
      this.productosAgregados.push(prod);
    }
    prod.agregados++;
  }


}
