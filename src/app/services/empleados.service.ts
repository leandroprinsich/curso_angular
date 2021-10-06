import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  aEmpleados: Empleado[];
  constructor() {
    this.aEmpleados = [];
  }

  add(empleado: Empleado) {
    this.aEmpleados.push(empleado);
  }

  getAllPromise(): Promise<Empleado[]> {
    return new Promise<Empleado[]>((resolve, reject)=>{
      return resolve(this.aEmpleados);
    })
  }

}
