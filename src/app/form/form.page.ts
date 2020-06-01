import { Component, OnInit } from '@angular/core';

import { CartManagerService } from '../cart-manager.service';
import { PizzaManagerService } from '../pizza-manager.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor(public cartManager:CartManagerService, public pizzaManager:PizzaManagerService) { }

  ngOnInit() {
    this.cartManager.cart.subscribe(message => this.cartCount = message.length);
    this.pizzaManager.pizzaList.subscribe(message => this.pizzaList = message);
    this.pizzaManager.allIngredients.subscribe(message => this.ingredientList = message);

    for(let i=0; i<this.pizzaList.length; i++){
      for(let j=0; j<Object.keys(this.pizzaList[i]).length; j++){
        if(Object.keys(this.pizzaList[i])[j] == "id"){
          if(Object.values(this.pizzaList[i])[j] > this.lastPizzaId){
            this.lastPizzaId = Object.values(this.pizzaList[i])[j];
          }
        }
      }
    }

    for(let i=0; i<this.ingredientList.length; i++){
      for(let j=0; j<Object.keys(this.ingredientList[i]).length; j++){
        if(Object.keys(this.ingredientList[i])[j] == "id"){
          if(Object.values(this.ingredientList[i])[j] > this.lastIngredientId){
            this.lastIngredientId = Object.values(this.ingredientList[i])[j];
          }
        }
      }
    }
  }

  cartCount = 0;
  pizzaList = [];
  ingredientList = [];
  
  lastPizzaId;
  lastIngredientId;


  addIngredient(name){
    this.pizzaManager.addIngredient({"id": (this.lastIngredientId+1), "nom": name});
  }
}
