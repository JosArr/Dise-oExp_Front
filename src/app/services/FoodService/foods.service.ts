import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  private foodApiURL = 'https://healthfood-production-ccaa.up.railway.app/api/v1/foods'
  constructor(private http: HttpClient) { }

  getFoods() {
    return this.http.get(this.foodApiURL);
  }

  getFoodsByType(type: string) {
    return this.http.get(`${this.foodApiURL}/type/${type}`);
  }
}
