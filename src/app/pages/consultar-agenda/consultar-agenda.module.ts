import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarAgendaPageRoutingModule } from './consultar-agenda-routing.module';

import { ConsultarAgendaPage } from './consultar-agenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarAgendaPageRoutingModule
  ],
  declarations: [ConsultarAgendaPage]
})
export class ConsultarAgendaPageModule {}
