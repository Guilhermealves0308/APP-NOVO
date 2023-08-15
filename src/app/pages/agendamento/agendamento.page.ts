import { Component } from '@angular/core';
import { AgendamentoService } from '.\services\agendamento.service.ts';

@Component({
  selector: 'app-agendamento',
  templateUrl: 'agendamento.page.html',
  styleUrls: ['agendamento.page.scss'],
})
export class AgendamentoPage {
  selectedDate: string;

  constructor(private agendamentoService: AgendamentoService) {}

  agendar() {
    this.agendamentoService.agendarConsulta(this.selectedDate).then(() => {
      console.log('Consulta agendada!');
    });
  }
}
