import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { debounceTime } from 'rxjs/operators';
import { Empleado } from 'src/app/models/empleado.model';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css']
})
export class FormEmpleadoComponent implements OnInit {
  formulario: FormGroup;
  constructor(
    private empleadosService: EmpleadosService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        this.noNumbersValidator
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        this.noNumbersValidator
      ]),
      email: new FormControl('', [
        Validators.pattern(/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/),
        Validators.required,
      ]),
      edad: new FormControl('', [
        this.edadValidator,
        Validators.required
      ]),

      departamento: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),

      imagen: new FormControl('',[
        Validators.required,
      ]),


    })
  }

  noNumbersValidator(formControl: any) {
    const value = formControl.value;
    return /\d/.test(value) ? { mensaje: "Este campo no debe contener números" } : null;
  }

  edadValidator(formControl: any) {
    const value = formControl.value;

    const max = 65;
    const min = 18;
    if (value >= 18 && value <= 65) {
      return null;
    }
    else {
      return {
        mensaje: ` La edad debe estar entre ${min} y ${max} años`
      };
    }
  }


  ngOnInit(): void {
    const emailControl = this.formulario.controls.email;

    // Sin el pipe(debounceTime(500)), la acción se realiza sin retraso,
    // lo que provoca un gasto innecesario de memoria.
    // Agregándole el "retraso", la acción se realiza cuando termino de escribir,
    // porque entre pulsación y pulsación hay menos de 500 milisegundos.

    emailControl.valueChanges.pipe(debounceTime(500)).subscribe(value =>{
      console.log("cambios: ",value)
    })
  }

  onSubmit() {
    const formu = this.formulario.value;
    console.log(this.formulario.value)
    let empleado = new Empleado(
      0,
      formu.nombre,
      formu.apellidos,
      formu.email,
      formu.edad,
      formu.departamento,
      formu.password,
      formu.imagen
    );
    this.empleadosService.add(empleado);
    this.router.navigate(["empleado/list"]);
  }


}
