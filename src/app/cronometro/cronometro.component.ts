import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  @Input() startTime: number;
  @Input() mensaje: string;
  @Output() finalizoEvent: EventEmitter<string>;
  constructor() {
    this.startTime = 10;
    this.mensaje = '';
    this.finalizoEvent = new EventEmitter();
  }
  start = (e:any) => {
      let contador = 0;
      let intervalo =  setInterval(() => {
        if(this.startTime <= 0) {
          e.target.previousSibling.firstChild.readOnly = false;
          this.avisar();
          this.startTime = contador;
          clearInterval(intervalo);
        }
        else{
          e.target.previousSibling.firstChild.readOnly = true;
          this.startTime--;
          contador++;
        }
        }, 1000);


  }
  setInitialTime(e:any){
    this.startTime = e.target.value;
  }

  avisar(){
    this.finalizoEvent.emit("El cronómetro ha finalizado. Para reiniciarlo vuelva a pulsar start")
  }

  ngOnInit(): void {
  }

}
