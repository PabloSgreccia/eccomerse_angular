import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Interfaces
import { Product } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  items: Product[] = [];

  constructor(private http: HttpClient) { }

  addToCart(product: Product){
    this.items.push(product);
    console.log(this.items);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('../assets/shipping.json')
  }

}
