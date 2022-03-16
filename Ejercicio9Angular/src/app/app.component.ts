import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre : string = "Concepcion Marquez Redondo"
  estudios : string = "Estudiante de Ingeniería del Software"
  titulo : string = "Bachillerato Científico Tecnológico"
  instituto : string = "IES El Pomar"
  duracion : string = "2014 - 2016"
  perfil : string = "Perfil profesional"
  educacion : string = "Educación"
  aptitudes : string = "Aptitudes"
}
