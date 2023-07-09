import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { FormsModule } from '@angular/forms';
import { FormularioTareaComponent } from './formulario-tarea/formulario-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTareasComponent,
    FormularioTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
