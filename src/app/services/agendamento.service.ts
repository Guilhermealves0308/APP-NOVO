import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AgendamentoService {
  agendarConsulta(selectedDate: string): Promise<void> {
    // Lógica para agendar a consulta
    // Retorne uma Promise
    return new Promise<void>((resolve, reject) => {
      // Lógica para agendar a consulta
      if ('consultaAgendadaComSucesso') {
        resolve();
      } else {
        reject('Erro ao agendar consulta');
      }
    });
  }
}
