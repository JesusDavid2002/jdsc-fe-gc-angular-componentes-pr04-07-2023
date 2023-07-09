import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario-tarea',
  templateUrl: './formulario-tarea.component.html',
  styleUrls: ['./formulario-tarea.component.css']
})
export class FormularioTareaComponent {
  titulo: string = '';
  descripcion: string = '';

  tareas: any = [];

  // Utilizamos el Output para exportar los datos y el eventEmitter para enviar el evento con los datos del vector a la clase padre
  @Output() eventData = new EventEmitter <any>();

  // Creamos un método para añadir tareas a la lista-tareas
  agregarTarea(tareaNueva:any){
    tareaNueva = {
      'titulo': this.titulo,
      'descripcion': this.descripcion
    }
    this.tareas.push(tareaNueva);
    this.eventData.emit(tareaNueva);
  }
}
