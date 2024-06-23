import {Component, inject} from '@angular/core';
import {CartService} from "../../services/CartService/cart.service";

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent {
  cartService = inject(CartService);

  deleteFromCart(food: any){
    this.cartService.delete(food);
  }
}
