import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { PizzaManagerService } from '../pizza-manager.service';
import { CartManagerService } from '../cart-manager.service';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.page.html',
  styleUrls: ['./pizza-details.page.scss'],
})
export class PizzaDetailsPage implements OnInit {

  constructor(private pizzaManager:PizzaManagerService, private cartManager:CartManagerService, private alertController:AlertController) { }

  ngOnInit() {
    this.pizzaManager.selectedPizza.subscribe(message => this.pizza = message);
    this.pizzaManager.allIngredients.subscribe(message => this.ingredientList = message);
    this.cartManager.cart.subscribe(message => this.cartCounter = message.length)
  }

  cartCounter = 0;

  ingredientList =[];

  pizza = {
    "id": 16,
    "ingredients": [
        9,
        10,
        11,
        12,
        13,
        14,
        17
    ],
    "price": 999,
    "name": "MANGE",
    "photo": "https://media.giphy.com/media/9fuvOqZ8tbZOU/giphy.gif"
  }

  async alert(addedPizza){
    if(addedPizza){
      this.cartManager.addToCart(addedPizza);
      const alert = await this.alertController.create({
        message: 'Pizza added to cart.',
        buttons: ['OK']
      });
      await alert.present();
    }else{
      const alert = await this.alertController.create({
        message: 'Erreur: pas de pizza sélectionnée',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

}
