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
    this.pacientes = [{
      "id": 1,
      "nome":"Renan",
      "sobrenome":"Reis",
      "cpf":"1234",
      "email":"renan@renan.com"
    },
    {
      "id": 2,
      "nome":"Maria",
      "sobrenome":"Mariana",
      "cpf":"4321",
      "email":"maria@maria.com"

    }]

  }
}
