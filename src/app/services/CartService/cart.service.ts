import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: any[] = [];

  constructor() { }

  addToCart(food: any){
    this.items.push({...food, quantity: 1});
  }

  getItems(){
    return this.items;
  }

  delete(item: any) {
    this.items = this.items.filter((i) => i.id !== item.id);
  }

  incrementQuantity(id: number){
    let food = this.items.find((i) => i.id === id);
    if(food){
      food.quantity++;
    }
  }

  decrementQuantity(id: number){
    let food = this.items.find((i) => i.id === id);
    if(food){
      food.quantity--;
      if(food.quantity === 0){
        this.delete(food);
      }
    }
  }

  getTotal(){
    return this.items.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }

  getTotalCal(){
    return this.items.reduce((total, item) => {
      return total + (item.calories * item.quantity);
      }, 0);
  }
}
