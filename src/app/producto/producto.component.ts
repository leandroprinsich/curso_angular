import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() nombre: string = '';
  @Input() precio: string='';
  @Input() categoria: string='';
  @Input() imagen: string='';
  constructor() { }

  ngOnInit(): void {
  }

}
