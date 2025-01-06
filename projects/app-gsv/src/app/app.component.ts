import { Component } from '@angular/core';
import { AuthService } from './core/components/login/services/auth.service';

@Component({
  selector: 'gsv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'appGSV';
  sideNavStatus = true;
  mostrarLoginState = true;

  validarExpandidoMenu(expandido: boolean) {
    this.sideNavStatus = expandido;
  }

  mostrarLogin(login: boolean) {
    this.mostrarLoginState = login;
  }

  getAuth(response: any) {
    this.mostrarLoginState = response ? true : false;
    console.log(this.mostrarLoginState);
  }
}
