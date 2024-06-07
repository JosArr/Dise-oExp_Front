import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  private foodApiURL = 'http://localhost:8080/api/v1/foods'
  constructor(private http: HttpClient) { }

  getFoods() {
    return this.http.get(this.foodApiURL);
  }

  getFoodsByType(type: string) {
    return this.http.get(`${this.foodApiURL}/type/${type}`);
  }
}
