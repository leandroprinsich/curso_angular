import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado.model';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {
  aEmpleados: Empleado[];
  constructor(
    private empleadosService: EmpleadosService
  ) {
    this.aEmpleados = [];
  }

  async ngOnInit() {
    this.aEmpleados = await this.empleadosService.getAllPromise();
  }

}
