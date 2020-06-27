import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../c.service';

import { travels } from '../travels';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {
travel;
  constructor(private route:ActivatedRoute, private cartService: CartService) { }

  addToCart(travel) {
    window.alert('Your product has been added to the cart. check the cart!');
    this.cartService.addToCart(travel);
  }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.travel = travels[+params.get('productId')];
    });
  }

}
