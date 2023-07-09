import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jdsc-fe-gc-angular-componentes-pr04-07-2023';
  arrayTareas: any = [];

  // Recogemos los datos del vector de formulario-tarea y los metemos en un array
  datosFormulario(tareas: any){
    this.arrayTareas.push(tareas); 
  }
}
