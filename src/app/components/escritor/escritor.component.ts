import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Escritor } from 'src/app/models/escritor.model';
import { EscritoresService } from 'src/app/services/escritores.service';

@Component({
  selector: 'app-escritor',
  templateUrl: './escritor.component.html',
  styleUrls: ['./escritor.component.css']
})
export class EscritorComponent implements OnInit {
  escritor: Escritor;
  constructor(
    private escritorService: EscritoresService,
    private activatedRoute: ActivatedRoute
  ) {
    this.escritor = new Escritor();
  }

  ngOnInit() {
    let idEscritor = 0;
    this.activatedRoute.params.subscribe(async(params)=>{
      idEscritor = parseInt(params.id);
      this.escritor = await this.escritorService.getByIdPromise(idEscritor);
    });
  }

}
