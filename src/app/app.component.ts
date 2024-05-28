import { Component } from '@angular/core';
import { UserService } from "./services/UserService/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
}
