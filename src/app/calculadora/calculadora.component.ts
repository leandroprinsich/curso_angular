import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  resultado:number;
  constructor() {
    this.resultado = 0;
  }
  btnOnclick(e:any){
    const newValue = e.target.innerHTML;
    const lastChar = parseFloat(this.resultado.toString().slice(-1));
    if(this.resultado == 0)
      this.resultado = newValue;
    else 
      if(!(isNaN(lastChar) && (isNaN(newValue))))
        this.resultado += newValue;
  }
  getResultado(e:any){
    let resultadoElement = e.target.parentElement.parentElement.previousSibling;
    try {
      resultadoElement.value = eval(resultadoElement.value);
    } catch (error) {
      resultadoElement.value = resultadoElement.value;
    }

  }

  ngOnInit(): void {
  }

}
