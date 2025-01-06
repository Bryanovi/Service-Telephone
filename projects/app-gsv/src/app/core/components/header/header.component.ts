import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../login/services/auth.service';

@Component({
  selector: 'gsv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuStatus = true;
  loginStatus = false;
  @Output() sideNavToggled: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onClickIniciarSesion: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  SideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

  validarUser = this.authService.getUserLogged();

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.validarUser = this.authService.getUserLogged();
    console.log('Oninit');
    console.log(this.validarUser);
  }

  logout() {
    this.authService.logout();
    console.log('logout');
  }

  iniciarSesion() {
    // Iniciar sesion pasa a otra vista.
    console.log('login');
    this.loginStatus = !this.loginStatus;
    this.onClickIniciarSesion.emit(this.loginStatus);
  }

  registrarSesion() {
    // Iniciar sesion pasa a otra vista.
    console.log('login');
    this.loginStatus = !this.loginStatus;
    this.onClickIniciarSesion.emit(this.loginStatus);
  }
}
