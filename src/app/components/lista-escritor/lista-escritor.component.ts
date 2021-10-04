import { Component, OnInit } from '@angular/core';
import { Escritor } from 'src/app/models/escritor.model';
import { EscritoresService } from 'src/app/services/escritores.service';

@Component({
  selector: 'app-lista-escritor',
  templateUrl: './lista-escritor.component.html',
  styleUrls: ['./lista-escritor.component.css']
})
export class ListaEscritorComponent implements OnInit {
  aEscritores: Escritor[];
  constructor(private escritoresService: EscritoresService) {
    this.aEscritores = [];
  }

  async ngOnInit() {
    this.aEscritores = await this.escritoresService.getAllPromise();
  }

  async onChangePais(e:any){
    let aPais: string[] = e.target.value != "todos" ? [e.target.value] : ["españa", "canadá", "reino unido", "chile"]
    this.aEscritores = await this.escritoresService.getByPaisPromise(aPais);
  }

}
