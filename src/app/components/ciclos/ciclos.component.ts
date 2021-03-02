import { DatosService } from './../../services/datos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asignatura } from "src/utils/Asignatura";
import { CiclosDatosService } from "src/app/services/ciclos-datos.service";
import { Ciclo } from "src/utils/Ciclo";

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit {

  itemsDam: Asignatura[] = [];
  itemsDaw: Asignatura[] = [];
  ciclosGenerar: Ciclo[] = [];

  constructor(
    private gestorRutasActivas: ActivatedRoute,
    private serviDatos: DatosService,
    private serviCiclos: CiclosDatosService,
    private gestorRutas: Router
  ) {}

  ngOnInit(): void {
    this.itemsDam = this.serviDatos.getAsignaturasDam();
    this.itemsDaw = this.serviDatos.getAsignaturaDaw();
    this.ciclosGenerar = this.serviCiclos.getCiclos();
  }
  irCiclo(nombre: string, curso: number) {
    this.gestorRutas.navigate(['detalleCiclos', nombre, curso]);
  }
}
