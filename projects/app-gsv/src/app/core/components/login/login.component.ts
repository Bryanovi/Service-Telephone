import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'gsv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario = {
    email: '',
    password: '',
  };
  @Output() onClickLogin: EventEmitter<any> = new EventEmitter<any>();
  constructor(private authService: AuthService) {}

  ingresar() {
    console.log(this.usuario);
    const { email, password } = this.usuario;
    this.authService.login(email, password).then((res) => {
      console.log('Se logeo', res);
      this.onClickLogin.emit(res);
    });
  }

  /*ingresarGoogle() {
    console.log(this.usuario);
    const { email, password } = this.usuario;
    this.authService.loginWithGoogle(email, password).then((res) => {
      console.log('Se logeo', res);
      this.onClickLogin.emit(res);
    });
  }
  */
}
