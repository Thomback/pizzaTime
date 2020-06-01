import { Component, OnInit } from '@angular/core';

import { CartManagerService } from '../cart-manager.service';

@Component({
  selector: 'app-your-cart',
  templateUrl: './your-cart.page.html',
  styleUrls: ['./your-cart.page.scss'],
})
export class YourCartPage implements OnInit {
  

  cart = [];

  totalPrice = 0;

  constructor(public cartManager:CartManagerService) { }
  
  ngOnInit() {
    this.cartManager.cart.subscribe(message => this.cart = message);

    this.totalPrice = 0;
    
    /*for(let i = 0; i<this.cart.length; i++){
      for(let j = 0; j<Object.keys(this.cart[i]).length; j++){
        if(Object.keys(this.cart[i])[j] == "price"){
          this.totalPrice = this.totalPrice + Object.values(this.cart[i])[j]; // PROBLEME : addition de number et Unknown impossible.
        }
      }
    }*/
    console.log("Total price : "+this.totalPrice);
  }

  deletePizza(pizzaId){
    this.cartManager.removeItem(pizzaId);
  }
}
