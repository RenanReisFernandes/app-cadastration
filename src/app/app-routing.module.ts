import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrationComponent } from './pages/cadastration/cadastration.component';
import { HomeComponent } from './pages/home/home.component';
import { PacienteListComponent } from './pages/paciente-list/paciente-list.component';

const routes: Routes = [
  {path: '', component: CadastrationComponent},
  {path: 'home', component: HomeComponent},
  {path: 'pacientes',component: PacienteListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
