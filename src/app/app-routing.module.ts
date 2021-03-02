import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleCiclosComponent } from './components/detalle-ciclos/detalle-ciclos.component';


const routes: Routes = [
{path:"home", component:HomeComponent},
{path:"ciclos", component:CiclosComponent},
{path:"ciclos/:id", component:CiclosComponent},
{path:"asignaturas", component:AsignaturasComponent},
{path: 'detalleCiclos', component: DetalleCiclosComponent },
{ path: 'detalleCiclos/:ciclo/:curso', component: DetalleCiclosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
