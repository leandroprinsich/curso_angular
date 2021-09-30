export class Producto {
  id: number = 0;
  nombre: string;
  precio: string = '';
  departamento: string ;
  imagen: string = '';
  cantidad: number;
  constructor(pNombre: string, pDepartamento:string,pCantidad:number) {
    this.nombre = pNombre;
    // this.precio = pPrecio;
    this.departamento = pDepartamento;
    this.cantidad = pCantidad;
  }
}
