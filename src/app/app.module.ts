import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastrationComponent } from './pages/cadastration/cadastration.component';
import { NavBarComponent } from './_components/nav-bar/nav-bar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { PacienteListComponent } from './pages/paciente-list/paciente-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastrationComponent,
    NavBarComponent,
    FooterComponent,
    PacienteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
