import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/UserService/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  nombreUsuario: string = '';
  nombre: string = '';
  apellido: string = '';
  correoElectronico: string =  '';
  telefono: string = '';
  nombreEditado: string = '';
  apellidoEditado: string = '';
  correoEditado: string = '';
  telefonoEditado: string = '';
  editandoNombre: boolean = false;
  editandoApellido: boolean = false;
  editandoCorreo: boolean = false;
  editandoTelefono: boolean = false;
  fotoPerfil: string = '';
  showPopup: boolean = false;
  showAlertPopup: boolean = false;
  showReportProblemPopup: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  menuItems = [
    { icon: 'fa fa-lock', text: 'Acceso y Seguridad' },
    { icon: 'fa fa-cog', text: 'Configuración' },
  ];

  onSelect(item: any): void {
    console.log('Selected:', item.text);
  }

  ngOnInit(): void {
    const usuarioLogueado = this.userService.getUsuarioLogueado();
    if (usuarioLogueado) {
      this.nombre = usuarioLogueado.name;
      this.apellido = usuarioLogueado.last_name;
      this.nombreUsuario = usuarioLogueado.name + ' ' + usuarioLogueado.last_name;
      this.correoElectronico = usuarioLogueado.email;
      this.telefono = usuarioLogueado.phone_number;
      this.fotoPerfil = usuarioLogueado.photo;
    }
  }
  showProfilePopup() {
    this.showPopup = !this.showPopup;
    this.showReportProblemPopup = false;
  }

  showReportProblem(){
    this.showReportProblemPopup = !this.showReportProblemPopup;
    this.showPopup = false;
  }

  showAlert() {
    this.showAlertPopup =!this.showAlertPopup;
  }

  closeAlert(){
    this.showAlertPopup = false;
  }

  guardarDatos() {
    this.nombre = this.nombreEditado;
    this.editandoNombre = false;

    this.apellido = this.apellidoEditado;
    this.editandoApellido = false;

    this.correoElectronico = this.correoEditado;
    this.editandoCorreo = false;

    this.telefono = this.telefonoEditado;
    this.editandoTelefono = false;

    const usuarioLogueado = this.userService.getUsuarioLogueado();
    usuarioLogueado.name = this.nombre;
    usuarioLogueado.last_name = this.apellido;
    usuarioLogueado.email = this.correoElectronico;
    usuarioLogueado.phone_number = this.telefono;

    this.userService.editarUsuario(usuarioLogueado).subscribe(response => {
      if (response) {
        console.log('Nombre de usuario actualizado en el servidor');
      } else {
        console.error('Error al actualizar el nombre de usuario');
      }
    });
  }
  editarDatos() {
    this.nombreEditado = this.nombre;
    this.editandoNombre = true;

    this.apellidoEditado = this.apellido;
    this.editandoApellido = true;

    this.correoEditado = this.correoElectronico;
    this.editandoCorreo = true;

    this.telefonoEditado = this.telefono;
    this.editandoTelefono = true;
  }


  cerrarSesion(){
    this.userService.cerrarSesion();
    this.router.navigate(['/iniciosesion']);
  }
}
