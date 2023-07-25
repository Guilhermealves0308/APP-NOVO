import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username!: string;
  password!: string;

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      // Lógica para redirecionar para a página após o login bem-sucedido
      console.log('Login bem-sucedido!');
    } else {
      console.log('Credenciais inválidas. Tente novamente.');
    }

    this.ngOnInit() {
      this.login(this.username, this.password);
    }
    
}
}
