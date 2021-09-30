import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/models/producto';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombre: string;
  cantidad: number;
  departamento: string;
  id: number = 0;
  invalidCantidad: boolean = false;
  invalidNombre: boolean = false;
  invalidDepartamento: boolean = false;

  @Output() productoCreado: EventEmitter<Producto>;
  constructor() {
    this.productoCreado = new EventEmitter();
    this.nombre= '';
    this.cantidad = 0;
    this.departamento = '';
  }

  ngOnInit(): void {
  }
  onSubmitFormulario(){
    this.invalidCantidad = (this.cantidad <= 0);
    this.invalidNombre = (this.nombre == '');
    this.invalidDepartamento = (this.departamento == '');

    if(this.invalidCantidad || this.invalidNombre || this.invalidDepartamento) return;
    let prod = new Producto(this.nombre, this.departamento, this.cantidad);
    prod.id = ++this.id;
    this.productoCreado.emit(prod);
  }

}
