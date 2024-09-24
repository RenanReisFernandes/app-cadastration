import { Component } from '@angular/core';
import { Paciente } from '../../entities/paciente';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrl: './paciente-list.component.css'
})
export class PacienteListComponent {

  pacientes: Paciente[]=[];

  constructor(private pacienteService: PacienteService){}
  ngOnInit(): void{
   this.getPacientes();

  }

  private getPacientes(){
    this.pacienteService.getPacienteList().subscribe(data =>{
      this.pacientes = data;
    })
  }
}
