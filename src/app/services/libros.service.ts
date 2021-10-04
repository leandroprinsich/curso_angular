import { Injectable } from '@angular/core';
import { LIBROS } from '../db/libros.db';
import { Libro } from '../models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  aLibros: Libro[];
  constructor() {
    this.aLibros = LIBROS;
  }

    // return promise
    getAllPromise(): Promise<Libro[]>{
      return new Promise<Libro[]>((resolve, reject)=>{
        resolve(this.aLibros);
      })
    }

    getByAutor(idAutor: number): Promise<Libro[]>{
      return new Promise<Libro[]>((resolve, reject)=>{
        resolve(this.aLibros.filter(e=>(e.escritor == idAutor)));
      })
    }
}
