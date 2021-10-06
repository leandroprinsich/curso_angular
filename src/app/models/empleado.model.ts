export class Empleado {
  id: number = 0;
  nombre: string = '';
  apellidos: string= '';
  email: string= '';
  edad: number= 0;
  departamento: string = '';
  password: string= '';
  imagen: string ='';

  constructor(id: number,nombre: string, apellidos: string, email: string, edad: number, departamento: string, password: string, imagen: string ){
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.email = email;
    this.edad = edad;
    this.departamento = departamento;
    this.password = password;
    this.imagen = imagen;
  }

}
