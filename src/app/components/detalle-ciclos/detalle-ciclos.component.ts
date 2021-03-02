import { Component, OnInit } from '@angular/core';
import { stringify } from "@angular/compiler/src/util";
import { ActivatedRoute } from "@angular/router";
import { CiclosDatosService } from "src/app/services/ciclos-datos.service";
import { DatosService } from "src/app/services/datos.service";
import { Asignatura } from "src/utils/Asignatura";
import { Ciclo } from "src/utils/Ciclo";

@Component({
  selector: 'app-detalle-ciclos',
  templateUrl: './detalle-ciclos.component.html',
  styleUrls: ['./detalle-ciclos.component.css']
})

export class DetalleCiclosComponent implements OnInit {

  conocimiento: Asignatura[] = [];
  conoFiltrado: Asignatura[] = [];

  constructor(
    private gestorRutasActivas: ActivatedRoute,
    private datosAsignatura: DatosService,
    private datosCiclos: CiclosDatosService
  ) {}
  cicloSecun: string;
  cursoSecun: number;
  img: string;

  ngOnInit(): void {
    this.gestorRutasActivas.paramMap.subscribe((param) => {
      this.cicloSecun = param.get('ciclo');
      this.cursoSecun = parseInt(param.get('curso'));

      if (this.cicloSecun == 'DAM' && this.cursoSecun == 1) {
        this.conocimiento = this.datosAsignatura.getAsignaturasDam();
        this.img = 'assets/images/dam.jpeg';
        for (let index = 0; index < this.conocimiento.length; index++) {
          const element = this.conocimiento[index];
          if (element.ciclo == 'DAM | DAW' && element.curso == 1) {
            this.conoFiltrado.push(element);
          }
        }
      } else if (this.cicloSecun == 'DAM' && this.cursoSecun == 2) {
        this.conocimiento = this.datosAsignatura.getAsignaturasDam();
        this.img = 'assets/images/dam.jpeg';
        for (let index = 0; index < this.conocimiento.length; index++) {
          const element = this.conocimiento[index];
          if (
            element.ciclo == 'DAM' ||
            (element.ciclo == 'DAM | DAW' && element.curso == 2)
          ) {
            this.conoFiltrado.push(element);
          }
        }
      } else if (this.cicloSecun == 'DAW' && this.cursoSecun == 1) {
        this.conocimiento = this.datosAsignatura.getAsignaturaDaw();
        this.img = 'assets/images/daw.jpeg';
        for (let index = 0; index < this.conocimiento.length; index++) {
          const element = this.conocimiento[index];
          if (element.ciclo == 'DAM | DAW' && element.curso == 1) {
            this.conoFiltrado.push(element);
          }
        }
      } else if (this.cicloSecun == 'DAW' && this.cursoSecun == 2) {
        this.conocimiento = this.datosAsignatura.getAsignaturaDaw();
        this.img = 'assets/images/daw.jpeg';
        for (let index = 0; index < this.conocimiento.length; index++) {
          const element = this.conocimiento[index];
          if (element.ciclo == 'DAW' && element.curso == 2) {
            this.conoFiltrado.push(element);
          }
        }
      }
    });
  }
}