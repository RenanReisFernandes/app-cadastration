import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../entities/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private baseURL = "http://localhost:8080/v1/paciente/pacientes";

  constructor(private httpClient: HttpClient) { }

  getPacienteList(): Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(`${this.baseURL}`);
  }
}
