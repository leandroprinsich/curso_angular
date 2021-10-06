import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEmpleadoComponent } from './components/form-empleado/form-empleado.component';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'empleado/new' },
  { path:'empleado/new', component: FormEmpleadoComponent },
  { path:'empleado/list', component: ListEmpleadoComponent },
  // { path: 'error404', component: Error404Component  },
  { path: '**', redirectTo: 'empleado/new'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
