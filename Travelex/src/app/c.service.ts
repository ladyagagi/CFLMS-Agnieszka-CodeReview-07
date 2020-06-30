import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  discount = '';

  constructor() { }
 
  addToCart(travel) {
    this.items.push(travel);
  }
 
  getItems() {
    return this.items;
  }
 
  clearCart() {
    this.items = [];
    return this.items;
  }

  deleteItem(itemId) {
    this.items.splice(itemId,1)
    return this.items;
  }

  calculateTotal(){
    let total: number = 0;
    for (let travel of this.items) {
      total += travel.preis;
    }

    switch (true){
      case total >= 200 && total < 500:
        (total *= 0.9);
        this.discount = '10% Rabatt';
          break;
      case total >= 500:
        (total *= 0.8);
        this.discount = '20% Rabatt!';
         break;
      default:
        this.discount = '';
          break;
    }

    return total.toFixed(2);
  }

 }