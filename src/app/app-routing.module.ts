import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrationComponent } from './pages/cadastration/cadastration.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: CadastrationComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
