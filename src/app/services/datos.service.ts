import { Injectable } from '@angular/core';
import { Asignatura } from "src/utils/Asignatura";

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  asignaturaDam: Asignatura[] = [
    {
      nombre: 'Sistemas informáticos',
      profesor: 'Isaac Sampedro',
      conocimientos: [
        { nombre:'PowerShell', imagen: 'assets/images/powershell.png' },
        { nombre: 'Windows', imagen: 'assets/images/win.png' },
        { nombre: 'Linux', imagen: 'assets/images/linux.png' },
        { nombre: 'Virtualizacion', imagen: 'assets/images/virtual.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Programación',
      profesor: 'Borja Martín',
      conocimientos: [
        { nombre: 'Java', imagen: 'assets/images/java.png' },
        { nombre: 'MySQL', imagen: 'assets/images/mysql.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Bases de datos',
      profesor: 'Javier Martinez',
      conocimientos: [
        { nombre: 'MySQL', imagen: 'assets/images/mysql.png' },
        { nombre: 'SQL Server', imagen: 'assets/images/sql.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Lenguajes de Marcas',
      profesor: 'Javier Martinez',
      conocimientos: [
        { nombre: 'HTML', imagen: 'assets/images/xml.jpg' },
        { nombre: 'XML', imagen: 'assets/images/html.jpeg' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Entornos de desarrollo',
      profesor: 'Jesús Niño',
      conocimientos: [
        { nombre: 'PowerShell', imagen: 'assets/images/powershell.png' },
        { nombre: 'Scrum', imagen: 'assets/images/scrum.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Empresa e Iniciativa emprendedora',
      profesor: 'Marta Jimenez',
      conocimientos: [
        { nombre: 'Emprender', imagen: 'assets/images/empresa.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 2,
    },
    {
      nombre: 'Inglés',
      profesor: 'Rocio',
      conocimientos: [{ nombre: 'ingles', imagen: 'assets/images/ingles.jpg' }],
      ciclo: 'DAM | DAW',
      curso: 2,
    },
    {
      nombre: 'Programación Multimedia y Dispositivos Moviles',
      profesor: 'Borja Martín',
      conocimientos: [
        { nombre: 'Java', imagen: 'assets/images/java.png' },
        { nombre: 'XML', imagen: 'assets/images/xml.jpg' },
        { nombre: 'Json', imagen: 'assets/images/json.png' },
      ],
      ciclo: 'DAM ',
      curso: 2,
    },
    {
      nombre: 'Desarrollo de interfaces',
      profesor: 'Borja Martín',
      conocimientos: [
        { nombre: 'Java', imagen: 'assets/images/java.png' },
        { nombre: 'Javafx', imagen: 'assets/images/javafx.jpg' },
        { nombre: 'Json', imagen: 'assets/images/json.png' },
        { nombre: 'Js', imagen: 'assets/images/js.jpg' },
        { nombre: 'Angular', imagen: 'assets/images/angular.png' },
      ],
      ciclo: 'DAM',
      curso: 2,
    },
    {
      nombre: 'Acceso a Datos',
      profesor: 'Hector Alonso',
      conocimientos: [
        { nombre: 'Java', imagen: 'assets/images/java.png' },
        { nombre: 'MySQL', imagen: 'assets/images/mysql.png' },
        { nombre: 'Mongo', imagen: 'assets/images/mongo.jpg' },
        { nombre: 'PHP', imagen: 'assets/images/php.png' },
      ],
      ciclo: 'DAM',
      curso: 2,
    },
    {
      nombre: 'Programacion de servicios y procesos',
      profesor: 'Jesús Niño',
      conocimientos: [
        { nombre: 'Seguridad', imagen: 'assets/images/seguridad.jpg' },
        { nombre: 'PowerShell', imagen: 'assets/images/powershell.png' },
      ],
      ciclo: 'DAM',
      curso: 2,
    },
    {
      nombre: 'Sistemas de gestión empresarial',
      profesor: 'Hector Alonso',
      conocimientos: [
        { nombre: 'ERP', imagen: 'assets/images/erp.jpg' },
        { nombre: 'Odoo', imagen: 'assets/images/odoo.png' },
      ],
      ciclo: 'DAM',
      curso: 2,
    },
  ];

  asignaturaDaw: Asignatura[] = [
    {
      nombre: 'Sistemas informáticos',
      profesor: 'Isaac Sampedro',
      conocimientos: [
        { nombre: 'PowerShell', imagen: 'assets/images/powershell.png' },
        { nombre: 'Windows', imagen: 'assets/images/win.png' },
        { nombre: 'Linux', imagen: 'assets/images/linux.png' },
        { nombre: 'Virtualizacion', imagen: 'assets/images/virtual.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Programación',
      profesor: 'Borja Martín',
      conocimientos: [
        { nombre: 'Java', imagen: 'assets/images/java.png' },
        { nombre: 'MySQL', imagen: 'assets/images/mysql.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Bases de datos',
      profesor: 'Javier Martinez',
      conocimientos: [
        { nombre: 'MySQL', imagen: 'assets/images/mysql.png' },
        { nombre: 'SQL server', imagen: 'assets/images/sql.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Lenguajes de Marcas',
      profesor: 'Javier Martinez',
      conocimientos: [
        { nombre: 'Html', imagen: 'assets/images/xml.jpg' },
        { nombre: 'XML', imagen: 'assets/images/html.jpeg' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Entornos de desarrollo',
      profesor: 'Jesús Niño',
      conocimientos: [
        { nombre: 'PowerShell', imagen: 'assets/images/powershell.png' },
        { nombre: 'Scrum', imagen: 'assets/images/scrum.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Empresa e Iniciativa emprendedora',
      profesor: 'Marta Jimenez',
      conocimientos: [
        { nombre: 'Emprender', imagen: 'assets/images/empresa.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 2,
    },
    {
      nombre: 'Inglés',
      profesor: 'Rocio',
      conocimientos: [{ nombre: 'ingles', imagen: 'assets/images/ingles.jpg' }],
      ciclo: 'DAM | DAW',
      curso: 2,
    },
    {
      nombre: 'Desarrollo Aplicaciones Web Entorno Cliente',
      profesor: 'Borja Martín',
      conocimientos: [
        { nombre: 'JavaScript', imagen: 'assets/images/js.jpg' },
        { nombre: 'React', imagen: 'assets/images/react.png' },
        { nombre: 'Webpack', imagen: 'assets/images/webpack.jpg' },
        { nombre: 'Node', imagen: 'assets/images/node.png' },
      ],
      ciclo: 'DAW',
      curso: 2,
    },
    {
      nombre: 'Desarrollo Aplicaciones Web Entorno Servidor',
      profesor: 'David Ventura',
      conocimientos: [
        { nombre: 'PHP', imagen: 'assets/images/php.png' },
        { nombre: 'Node', imagen: 'assets/images/node.png' },
      ],
      ciclo: 'DAW',
      curso: 2,
    },
    {
      nombre: 'Despliegue de Aplicaciones',
      profesor: 'Jesus Niño',
      conocimientos: [
        { nombre: 'Apache', imagen: 'assets/images/apache.jpeg' },
        { nombre: 'Tomcat', imagen: 'assets/images/tomcat.png' },
        { nombre: 'PowerShell', imagen: 'assets/images/powershell.png' },
      ],
      ciclo: 'DAW',
      curso: 2,
    },
    {
      nombre: 'Desarrollo de Interfaces Web',
      profesor: 'Victor Martín',
      conocimientos: [
        { nombre: 'XML', imagen: 'assets/images/xml.jpg' },
        { nombre: 'Bootstrap', imagen: 'assets/images/boots.png' },
        { nombre: 'Diseño', imagen: 'assets/images/disenio.jpg' },
      ],
      ciclo: 'DAW',
      curso: 2,
    },
  ];

  asignaturas: Asignatura[] = [
    {
      nombre: 'Sistemas informáticos',
      profesor: 'Isaac Sampedro',
      conocimientos: [
        { nombre: 'PowerShell', imagen: 'assets/images/powershell.png' },
        { nombre: 'Windows', imagen: 'assets/images/win.png' },
        { nombre: 'Linux', imagen: 'assets/images/linux.png' },
        { nombre: 'Virtualizacion', imagen: 'assets/images/virtual.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Programación',
      profesor: 'Borja Martín',
      conocimientos: [
        { nombre: 'Java', imagen: 'assets/images/java.png' },
        { nombre: 'MySQL', imagen: 'assets/images/mysql.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Bases de datos',
      profesor: 'Javier Martinez',
      conocimientos: [
        { nombre: 'MySQL', imagen: 'assets/images/mysql.png' },
        { nombre: 'SQL Server', imagen: 'assets/images/sql.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Lenguajes de Marcas',
      profesor: 'Javier Martinez',
      conocimientos: [
        { nombre: 'Html', imagen: 'assets/images/xml.jpg' },
        { nombre: 'XML', imagen: 'assets/images/html.jpeg' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Entornos de desarrollo',
      profesor: 'Jesús Niño',
      conocimientos: [
        { nombre: 'PowerShell', imagen: 'assets/images/powershell.png' },
        { nombre: 'Scrum', imagen: 'assets/images/scrum.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Empresa e Iniciativa emprendedora',
      profesor: 'Marta Jimenez',
      conocimientos: [
        { nombre: 'Emprender', imagen: 'assets/images/empresa.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 2,
    },
    {
      nombre: 'Inglés',
      profesor: 'Rocio',
      conocimientos: [{ nombre: 'ingles', imagen: 'assets/images/ingles.jpg' }],
      ciclo: 'DAM | DAW',
      curso: 2,
    },
    {
      nombre: 'Programación Multimedia y Dispositivos Moviles',
      profesor: 'Borja Martín',
      conocimientos: [
        { nombre: 'Java', imagen: 'assets/images/java.png' },
        { nombre: 'Xml', imagen: 'assets/images/xml.jpg' },
        { nombre: 'Json', imagen: 'assets/images/json.png' },
      ],
      ciclo: 'DAM',
      curso: 2,
    },
    {
      nombre: 'Desarrollo de interfaces',
      profesor: 'Borja Martín',
      conocimientos: [
        { nombre: 'Java', imagen: 'assets/images/java.png' },
        { nombre: 'Javafx', imagen: 'assets/images/javafx.jpg' },
        { nombre: 'Json', imagen: 'assets/images/json.png' },
        { nombre: 'Js', imagen: 'assets/images/js.jpg' },
        { nombre: 'Angular', imagen: 'assets/images/angular.png' },
      ],
      ciclo: 'DAM',
      curso: 2,
    },
    {
      nombre: 'Acceso a Datos',
      profesor: 'Hector Alonso',
      conocimientos: [
        { nombre: 'Java', imagen: 'assets/images/java.png' },
        { nombre: 'MySQL', imagen: 'assets/images/mysql.png' },
        { nombre: 'Mongo', imagen: 'assets/images/mongo.jpg' },
        { nombre: 'PHP', imagen: 'assets/images/php.png' },
      ],
      ciclo: 'DAM',
      curso: 2,
    },
    {
      nombre: 'Programacion de servicios y procesos',
      profesor: 'Jesús Niño',
      conocimientos: [
        { nombre: 'Seguridad', imagen: 'assets/images/seguridad.jpg' },
        { nombre: 'PowerShell', imagen: 'assets/images/powershell.png' },
      ],
      ciclo: 'DAM',
      curso: 2,
    },
    {
      nombre: 'Sistemas de gestión empresarial',
      profesor: 'Hector Alonso',
      conocimientos: [
        { nombre: 'ERP', imagen: 'assets/images/erp.jpg' },
        { nombre: 'Odoo', imagen: 'assets/images/odoo.png' },
      ],
      ciclo: 'DAM',
      curso: 2,
    },
    {
      nombre: 'Desarrollo Aplicaciones Web Entorno Cliente',
      profesor: 'Borja Martín',
      conocimientos: [
        { nombre: 'JavaScript', imagen: 'assets/images/js.jpg' },
        { nombre: 'React', imagen: 'assets/images/react.png' },
        { nombre: 'Webpack', imagen: 'assets/images/webpack.jpg' },
        { nombre: 'Node', imagen: 'assets/images/node.png' },
      ],
      ciclo: 'DAW',
      curso: 2,
    },
    {
      nombre: 'Desarrollo Aplicaciones Web Entorno Servidor',
      profesor: 'David Ventura',
      conocimientos: [
        { nombre: 'PHP', imagen: 'assets/images/php.png' },
        { nombre: 'Node', imagen: 'assets/images/node.png' },
      ],
      ciclo: 'DAW',
      curso: 2,
    },
    {
      nombre: 'Despliegue de Aplicaciones',
      profesor: 'Jesus Niño',
      conocimientos: [
        { nombre: 'Apache', imagen: 'assets/images/apache.jpeg' },
        { nombre: 'Tomcat', imagen: 'assets/images/tomcat.png' },
        { nombre: 'PowerShell', imagen: 'assets/images/powershell.png' },
      ],
      ciclo: 'DAW',
      curso: 2,
    },
    {
      nombre: 'Desarrollo de Interfaces Web',
      profesor: 'Victor Martín',
      conocimientos: [
        { nombre: 'XML', imagen: 'assets/images/xml.jpg' },
        { nombre: 'Bootstrap', imagen: 'assets/images/boots.png' },
        { nombre: 'Diseño', imagen: 'assets/images/disenio.jpg' },
      ],
      ciclo: 'DAW',
      curso: 2,
    },
  ];

  constructor() {}

  getAsignaturas(): Asignatura[] {
    return this.asignaturas;
  }

  getAsignaturasDam(): Asignatura[] {
    return this.asignaturaDam;
  }

  getAsignaturaDaw(): Asignatura[] {
    return this.asignaturaDaw;
  }
}
