import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";
import {UserService} from "./services/UserService/user.service";

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public userService: UserService, private router: Router) {}
    title = 'Health Food';
    isLoggedIn: boolean = false;
    options = [
      { path: '/iniciosesion', title: 'Iniciar Sesion' },
      { path: '/registro', title: 'Registro' },
    ];

    cerrarSesion(){
      this.userService.cerrarSesion();
      this.router.navigate(['/iniciosesion']);
    }
}
