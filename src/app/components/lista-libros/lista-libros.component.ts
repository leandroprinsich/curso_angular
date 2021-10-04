import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/models/libro.model';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {
  aLibros: Libro[];
  constructor(
    private librosService: LibrosService,
    private activatedRoute: ActivatedRoute
  ) {
    this.aLibros = [];
  }

  ngOnInit() {
    this.activatedRoute.parent?.params.subscribe(async(params) =>{
      let idEscritor = parseInt(params.id);
      this.aLibros = await this.librosService.getByAutor(idEscritor);
    })
  }

}
