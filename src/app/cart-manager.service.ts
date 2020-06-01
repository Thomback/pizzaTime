import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartManagerService {

  items = new BehaviorSubject([]);
  cart = this.items.asObservable();

  constructor() { }

  addToCart(product) {    // Add product to this.items
    this.items.value.push(product);
    this.cart =this.items.asObservable();
  }

  addMultiplesToCart(product, number){ // Add the same product in a certain number
    if(number > -1){
      for(let i = 0; i < number; i++){
        this.items.value.push(product)
      }
      this.cart =this.items.asObservable();
    }
  }

  getItems() {            // Returns this.items
    return this.items;
  }

  getItem(id){            // Returns a specific item
    return this.items[id];
  }


  removeItem(id){         // Delete element from this.items at id
    if(id > -1 && id < this.items.value.length){
      this.items.value.splice(id, 1);
      this.cart =this.items.asObservable();
    }else{
      console.log("Error: id not in array length");
    }
  }
}
