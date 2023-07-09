import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {

  // Traemos el array con los datos de la clase padre
  @Input() tareasArray: any = [];

  // Utilizamos el findIndex con el titulo para recoger el dato del array utilizando el titulo y con el.splice lo eliminamos
  borrarTarea(titulo: string){
    let index = this.tareasArray.findIndex((tarea: { titulo: string; }) => tarea.titulo == titulo);  
    this.tareasArray.splice(index, 1);
  }

  // Cuando pulsemos el boton si esta verde (completado) pasara a rojo (sin completar) y viceversa
  tareaCompletada(tarea: any){
    if(tarea.backgroundColor === 'rgb(179, 60, 60)'){
      tarea.backgroundColor = 'rgb(60, 179, 96)';
    }else{
      tarea.backgroundColor = 'rgb(179, 60, 60)';
    }
    
  }

}
