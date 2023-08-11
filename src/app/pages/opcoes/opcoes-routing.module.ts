// opcoes-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpcoesPage } from './opcoes.page';

const routes: Routes = [
  {
    path: '',
    component: OpcoesPage,
  },
  {
    path: 'perfil',
    loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule),
  },
  {
    path:'agendar',
    loadChildren: () => import('../agendar/agendar.module').then(m => m.AgendarPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcoesPageRoutingModule {}
