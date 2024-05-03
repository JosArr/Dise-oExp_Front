import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/UserService/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  nombre: string = 'Abraham';
  apellidos: string = 'Estrada';
  correo: string = 'elkchudovsky03@gmail.com';
  telefono: string = '938422157';

  nombreUsuario: string = '';
  correoElectronico: string = '';
  nombreEditado: string = '';
  correoEditado: string = '';
  editandoNombre: boolean = false;
  editandoCorreo: boolean = false;
  fotoPerfil: string='';
  showPopup = false;

  constructor(private userService: UserService) {}
  menuItems = [
    { icon: 'fa fa-user', text: 'Mis Datos' },
    { icon: 'fa fa-lock', text: 'Acceso y Seguridad' },
    { icon: 'fa fa-cog', text: 'Configuración' },
    { icon: 'fa fa-question-circle', text: 'Ayuda' },
    { icon: 'fa fa-sign-out', text: 'Cerrar Sesión' }
  ];

  onSelect(item: any): void {
    console.log('Selected:', item.text);
  }

  ngOnInit(): void {

    const usuarioLogueado = this.userService.getUsuarioLogueado();
    if (usuarioLogueado) {
      this.nombreUsuario = usuarioLogueado.nombre + ' ' + usuarioLogueado.apellido;
      this.correoElectronico = usuarioLogueado.correo;
      this.fotoPerfil=usuarioLogueado.perfil;
    }
  }
  showProfilePopup() {
    this.showPopup = !this.showPopup;
  }


  guardarNombre() {
    this.nombreUsuario = this.nombreEditado;
    this.editandoNombre = false;

    const usuarioLogueado = this.userService.getUsuarioLogueado();
    usuarioLogueado.nombre = this.nombreUsuario;
    this.userService.editarUsuario(usuarioLogueado).subscribe(response => {
      if (response) {
        console.log('Nombre de usuario actualizado en el servidor');
      } else {
        console.error('Error al actualizar el nombre de usuario');
      }
    });
  }

  guardarCorreo() {
    this.correoElectronico = this.correoEditado;
    this.editandoCorreo = false;

    const usuarioLogueado = this.userService.getUsuarioLogueado();
    usuarioLogueado.correo = this.correoElectronico;
    this.userService.editarUsuario(usuarioLogueado).subscribe(response => {
      if (response) {
        console.log('Correo electrónico actualizado en el servidor');
      } else {
        console.error('Error al actualizar el correo electrónico');
      }
    });
  }

  editarNombre() {
    this.nombreEditado = this.nombreUsuario;
    this.editandoNombre = true;
  }

  editarCorreo() {
    this.correoEditado = this.correoElectronico;
    this.editandoCorreo = true;
  }

}
