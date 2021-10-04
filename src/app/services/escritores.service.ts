import { Injectable } from '@angular/core';
import { ESCRITORES } from '../db/escritores.db';

import { Escritor } from '../models/escritor.model';


@Injectable({
  providedIn: 'root'
})
export class EscritoresService {
  aEscritores: Escritor[];
  constructor() {
    this.aEscritores = ESCRITORES;
  }

  // getAll(){
  //   return this.aEscritores;
  // }

  // return promise
  getAllPromise(): Promise<Escritor[]>{
    return new Promise<Escritor[]>((resolve, reject)=>{
      resolve(this.aEscritores);
    })
  }

  getByPaisPromise(aPais: string[]): Promise<Escritor[]>{
    return new Promise<Escritor[]>((resolve, reject)=>{
      resolve(this.aEscritores.filter(e=>(aPais.includes(e.pais))));
    })
  }

  getByIdPromise(id: number): Promise<Escritor>{
    return new Promise<Escritor>((resolve, reject)=>{
      const escritorFound = this.aEscritores.find(e=>(e.id === id));
      return escritorFound? resolve(escritorFound) : resolve(new Escritor());
    })
  }


}
