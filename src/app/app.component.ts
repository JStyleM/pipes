import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Jhonatan';
  nombre2 = 'jhonatan moncada brandan';
  numero = Math.PI;
  num = 0.523;
  salario = 1350.5;
  video = 'kBaXC9J3HPk';
  clave = 'mipassword';
  activar = true;

  Persona = {
    nombre: 'Jhonatan',
    edad: 22,
    direccion: {
      calle: '16',
      lote: '34'
    }
  };

  promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('llego la data'), 3500);
  });

  fecha = new Date();
}
