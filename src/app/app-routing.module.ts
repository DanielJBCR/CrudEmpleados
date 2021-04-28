import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';

const routes: Routes = [
  // Que cuando el usuario coloca la url list empleados nosotros renderizamos el componente ListEmpleados
  {path:'',redirectTo:'list-empleados',pathMatch: 'full'},
  {path:'list-empleados',component: ListEmpleadosComponent},
  {path:'create-empleado',component: CreateEmpleadoComponent},
{ path: 'editEmpleado/:id', component: CreateEmpleadoComponent },
  {path:'**',redirectTo:'list-empleados',pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }