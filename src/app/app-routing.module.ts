import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtraccionesComponent } from './atracciones/atracciones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { InicioComponent} from './inicio/inicio.component';


const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'atracciones', component: AtraccionesComponent},
  {path:'servicios', component: FormularioComponent},
  {path:'' , redirectTo:'/inicio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
