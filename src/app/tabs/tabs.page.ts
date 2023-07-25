import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OptionsModalComponent } from '../Componentes/options-modal/options-modal.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {

  constructor(private modalController: ModalController) {}

  async openOptionsModal() {
    const modal = await this.modalController.create({
      component: OptionsModalComponent,
      cssClass: 'my-custom-modal-css', // Estilo personalizado, se necessário
    });

    await modal.present();
  }
}
