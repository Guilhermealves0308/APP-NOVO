import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarAgendaPage } from './consultar-agenda.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarAgendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarAgendaPageRoutingModule {}
