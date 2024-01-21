import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public sidebarItemsDesplegables = [
    {
      label: 'Inicio', icon: 'home', categorias: [
        { label: 'Inicio', icon: 'checklist', url: '' },
        { label: 'Estadisticas', icon: 'monitoring', url: 'estadisticas' },
      ]
    },
    {
      label: 'Pacientes', icon: 'personal_injury', categorias: [
        { label: 'Lista Pacientes', icon: 'list_alt', url: 'lista/paciente' },
        { label: 'Agregar Paciente', icon: 'add', url: 'agregar/paciente' },
      ]
    },
    {
      label: 'Consultas', icon: 'home_health', categorias: [
        { label: 'Lista Consultas', icon: 'list_alt', url: 'lista/consulta' },
        { label: 'Agregar Consulta', icon: 'add', url: 'agregar/consulta' },
      ]
    },
    {
      label: 'Profesionales', icon: 'groups', categorias: [
        { label: 'Lista Profesionales', icon: 'list_alt', url: 'lista/profesional' },
        { label: 'Agregar Profesional', icon: 'add', url: 'agregar/profesional' },
      ]
    },
    {
      label: 'Horarios', icon: 'schedule', categorias: [
        { label: 'Calendario', icon: 'calendar_month', url: 'horarios' }
      ]
    },
    {
      label: 'Perfil', icon: 'settings', categorias: [
        { label: 'Mi perfil', icon: 'person', url: 'perfil' }
      ]
    }
  ]
}
