export class Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  completa: boolean;
  oTareaNgClass: any;
  constructor(id:number=999, titulo:string="", descripcion:string=""){
    this.id = id ;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.completa = false;
    this.oTareaNgClass = {
      completa: this.completa,
      tarea:true,
    }
  }

}
