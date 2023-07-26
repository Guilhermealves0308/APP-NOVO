import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opcoes',
  templateUrl: './opcoes.page.html',
  styleUrls: ['./opcoes.page.scss'],
})
export class OpcoesPage implements OnInit {
  darkMode: boolean = true;
  lightMode: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }


  toggleDarkMode() {
    // Implement logic to toggle dark mode here
    if (this.darkMode) {
      // Code to enable dark mode
      this.enableDarkMode();
    } else {
      // Code to disable dark mode
      this.disableDarkMode();
    }
  }

  toggleLightMode() {
    // Implement logic to toggle light mode here
    if (this.lightMode) {
      // Code to enable light mode
      this.enableLightMode();
    } else {
      // Code to disable light mode
      this.disableLightMode();
    }
  }

  private enableDarkMode() {
    // Code to enable dark mode
    document.body.classList.add('dark-theme');
  }

  private disableDarkMode() {
    // Code to disable dark mode
    document.body.classList.remove('dark-theme');
  }

  private enableLightMode() {
    // Code to enable light mode
    document.body.classList.add('light-theme');
  }

  private disableLightMode() {
    // Code to disable light mode
    document.body.classList.remove('light-theme');
  }

}
