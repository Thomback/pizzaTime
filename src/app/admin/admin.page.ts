import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { CartManagerService } from '../cart-manager.service';
import { PizzaManagerService } from '../pizza-manager.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(public cartManager:CartManagerService, public pizzaManager:PizzaManagerService, public alertController:AlertController) { }

  ngOnInit() {
    this.cartManager.cart.subscribe(message => this.cartCounter = message.length);
    this.pizzaManager.pizzaList.subscribe(message => this.myPizzaList = message);
    this.pizzaManager.allIngredients.subscribe(message => this.myIngredientList = message);
  }

  cartCounter = 0;

  myPizzaList = [];
  myIngredientList = [];

  async deletePizza(id){
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: 'Are you sure you want to delete this Pizza?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yup',
          handler: () => {
            this.pizzaManager.removePizza(id);
          }
        }
      ]
    });

    await alert.present();
  }

  async deleteIngredient(id){
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: 'Are you sure you want to delete this Ingredient?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yup',
          handler: () => {
            this.pizzaManager.removeIngredient(id);
          }
        }
      ]
    });

    await alert.present();
  }

 
}
