import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m => m.AuthModule))
  },
  {
    path: 'gestor',
    loadChildren: () => import('./gestor/gestor.module').then((m => m.GestorModule))
  },
  {
    path: 'mapas',
    loadChildren: () => import('./mapas/mapas.module').then((m => m.MapasModule))
  },
  {
    path: '',
    redirectTo: 'gestor',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'gestor',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
