import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from "../../services/UserService/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit{

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService,
              private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userService.getUserByEmail(this.loginForm.value.correo).subscribe(user => {
        if (user && user.contrasena === this.loginForm.value.contrasena) {
          console.log('Inicio de sesión exitoso');
          this.userService.setUsuarioLogueado(user);

          this.router.navigate(['/home']);
        } else {
          console.log('Inicio de sesión fallido');
        }
      });
    }
  }
}
