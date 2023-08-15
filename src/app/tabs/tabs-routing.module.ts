// tabs-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'tab2',
        loadChildren: () => import('../pages/agendamento/agendamento.module').then(m => m.AgendamentoPageModule),
      },
      {
        path: 'tab3',
        loadChildren: () => import('../pages/agendar/agendar.module').then(m => m.AgendarPageModule),
      },     
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
