import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: any[] = [];

  constructor() { }

  addToCart(food: any){
    this.items.push(food);
  }

  getItems(){
    return this.items;
  }

  delete(item: any) {
    this.items = this.items.filter((i) => i.id !== item.id);
  }
}
