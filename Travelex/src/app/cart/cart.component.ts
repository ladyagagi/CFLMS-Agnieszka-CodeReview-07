import { Component, OnInit } from '@angular/core';
import { CartService } from '../c.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items;
total;
discount = this.cartService.discount;


  constructor(private cartService:CartService) { 
    
  }

  onBook() {
    this.items = this.cartService.clearCart();
  }

  onDelete(itemId){
    this.items = this.cartService.deleteItem(itemId);
    this.total = this.cartService.calculateTotal();
    this.discount = this.cartService.discount;
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.total = this.cartService.calculateTotal();
    this.discount = this.cartService.discount;
  }
 

}
