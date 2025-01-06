import { Component } from '@angular/core';
import { AuthService } from '../../../core/components/login/services/auth.service';

@Component({
  selector: 'gsv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent {
  validarUser = this.authService.getUserLogged();
  constructor(private authService: AuthService) {}
}
