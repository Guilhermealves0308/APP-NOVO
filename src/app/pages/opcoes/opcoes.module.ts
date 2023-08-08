// opcoes.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { OpcoesPageRoutingModule } from './opcoes-routing.module'; // Certifique-se de importar corretamente o módulo de roteamento

import { OpcoesPage } from './opcoes.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    OpcoesPageRoutingModule,
  ],
  declarations: [OpcoesPage],
})
export class OpcoesPageModule {}
