import {Component, OnInit} from '@angular/core';
import { FoodsService } from '../../services/FoodService/foods.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  foods: any[] = [];

  constructor(private foodService: FoodsService) { }

  ngOnInit(): void {
    this.loadFoods('all');
  }

  loadFoods(type: string): void {
    if (type === 'all') {
      this.foodService.getFoods().subscribe((data: any) => {
        this.foods = data;
      });
    } else {
      this.foodService.getFoodsByType(type).subscribe((data: any) => {
        this.foods = data;
      });
    }
  }

  addToCart(food: any): void {
    console.log(food);
  }
}
