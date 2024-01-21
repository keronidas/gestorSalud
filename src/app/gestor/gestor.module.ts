import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { GestorRoutingModule } from './gestor-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { NewPacienteComponent } from './pages/new-paciente/new-paciente.component';
import { NewProfesionalComponent } from './pages/new-profesional/new-profesional.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { NewConsultaComponent } from './pages/new-consulta/new-consulta.component';
import { ListPacienteComponent } from './pages/list-paciente/list-paciente.component';
import { ListProfesionalComponent } from './pages/list-profesional/list-profesional.component';
import { ListConsultaComponent } from './pages/list-consulta/list-consulta.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { TodoComponent } from './pages/todo/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HomeComponent,
    NewPacienteComponent,
    NewProfesionalComponent,
    HorariosComponent,
    NewConsultaComponent,
    ListPacienteComponent,
    ListProfesionalComponent,
    ListConsultaComponent,
    ProfileComponent,
    EstadisticasComponent,
    TodoComponent,
    

  ],
  imports: [
    CommonModule,
    GestorRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GestorModule { }
