import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';
import { KeypadButton } from '../../../shared/interfaces/keypadButton.interface';
import Swal from 'sweetalert2';
import { ProductoService } from '../../services/producto.service';
import { AuthService } from '../../../core/components/login/services/auth.service';
@Component({
  selector: 'gsv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent {
  constructor(private authService: AuthService) {}

  validarUser = this.authService.getUserLogged();
}
