import { Component } from '@angular/core';
import { Paciente } from '../../entities/paciente';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrl: './paciente-list.component.css'
})
export class PacienteListComponent {

  pacientes: Paciente[];

  constructor(){}
  ngOnInit(): void{

  }
}
