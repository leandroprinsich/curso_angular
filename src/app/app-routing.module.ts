import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscritorComponent } from './components/escritor/escritor.component';
// import { EscritorComponent } from './components/escritor/escritor.component';
import { ListaEscritorComponent } from './components/lista-escritor/lista-escritor.component';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/escritores' },
  { path: 'escritores', component: ListaEscritorComponent },
  { path: 'escritores/:id', component: EscritorComponent, children: [{ path:'libros', component:ListaLibrosComponent } ] },
  { path:'**', redirectTo: '/escritores' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
