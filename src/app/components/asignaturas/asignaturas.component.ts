import { DatosService } from './../../services/datos.service';
import { Component, OnInit } from '@angular/core';
import { Asignatura } from 'src/utils/Asignatura';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css'],
})
export class AsignaturasComponent implements OnInit {
  asigGenerar: Asignatura[];
  asigBusquedas: Asignatura[] = [];
  

  constructor(private servicio: DatosService) {}

  ngOnInit(): void {
    this.asigGenerar = this.servicio.getAsignaturas();
  }

  buscarAsignatura(nombre:string,ciclo:string) {
    this.asigBusquedas = [];
    this.asigGenerar.forEach((asig) => {
      if (asig.nombre.toLowerCase().includes(nombre.toLowerCase())&&asig.ciclo.toLowerCase().includes(ciclo.toLowerCase())) {
        this.asigBusquedas.push(asig);
      }
    });
  }
}