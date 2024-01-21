import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewPacienteComponent } from './pages/new-paciente/new-paciente.component';
import { NewConsultaComponent } from './pages/new-consulta/new-consulta.component';
import { NewProfesionalComponent } from './pages/new-profesional/new-profesional.component';
import { ListPacienteComponent } from './pages/list-paciente/list-paciente.component';
import { ListConsultaComponent } from './pages/list-consulta/list-consulta.component';
import { ListProfesionalComponent } from './pages/list-profesional/list-profesional.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { TodoComponent } from './pages/todo/todo.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent
        , children: [
            { path: '', component: TodoComponent },
            { path: 'estadisticas', component: EstadisticasComponent },
            { path: 'agregar/paciente', component: NewPacienteComponent },
            { path: 'agregar/consulta', component: NewConsultaComponent },
            { path: 'agregar/profesional', component: NewProfesionalComponent },
            { path: 'lista/paciente', component: ListPacienteComponent },
            { path: 'lista/consulta', component: ListConsultaComponent },
            { path: 'lista/profesional', component: ListProfesionalComponent },
            { path: 'horarios', component: HorariosComponent },
            { path: 'perfil', component: ProfileComponent }



        ]
    },
    {
        path: '**', redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GestorRoutingModule { }
