import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  massagens: any[] = [
    {
      title: 'Massagem Relaxante',
      image: 'assets/massagem_relaxante.jpg',
      description: 'Uma massagem suave e relaxante para aliviar o estresse e a tensão.',
    },
    {
      title: 'Massagem Terapêutica',
      image: 'assets/massagem_terapeutica.jpg',
      description: 'Uma massagem focada em aliviar dores e desconfortos específicos.',
    },
    {
      title: 'Massagem Esportiva',
      image: 'assets/massagem_esportiva.jpg',
      description: 'Uma massagem para preparar e recuperar músculos antes e após atividades físicas intensas.',
    },
    {
      title: 'Massagem Ayurvédica',
      image: 'assets/massagem_ayurvedica.jpg',
      description: 'Uma massagem terapêutica originária da Índia, que busca equilíbrio e harmonia.',
    },
    {
      title: 'Massagem Shiatsu',
      image: 'assets/massagem_shiatsu.jpg',
      description: 'Uma massagem japonesa que aplica pressão em pontos específicos do corpo.',
    },
    // Adicione mais tipos de massagem aqui...
  ];
  
  constructor(private router: Router) {}
  goToAgendamento() {
    this.router.navigate(['/agendamento']);
  }

  ngOnInit() {
  }

}
