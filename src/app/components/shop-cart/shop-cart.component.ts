import {Component, inject, OnInit} from '@angular/core';
import {CartService} from "../../services/CartService/cart.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/UserService/user.service";

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit{

  constructor(private userService: UserService, private router: Router) {}

  cartService = inject(CartService);
  nombreUsuario: string = '';
  nombre: string = '';
  apellido: string = '';
  correoElectronico: string =  '';
  telefono: string = '';
  fotoPerfil: string = '';
  ubicacion: string = '';

  ngOnInit(): void {
    const usuarioLogueado = this.userService.getUsuarioLogueado();
    if (usuarioLogueado) {
      this.nombre = usuarioLogueado.name;
      this.apellido = usuarioLogueado.last_name;
      this.nombreUsuario = usuarioLogueado.name + ' ' + usuarioLogueado.last_name;
      this.ubicacion = usuarioLogueado.address;
      this.correoElectronico = usuarioLogueado.email;
      this.telefono = usuarioLogueado.phone_number;
      this.fotoPerfil = usuarioLogueado.photo;
    }
  }

  deleteFromCart(food: any){
    this.cartService.delete(food);
  }

  payment() {
    this.router.navigate(['/payment']);
  }
}
