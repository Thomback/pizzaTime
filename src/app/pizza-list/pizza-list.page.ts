import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { PizzaManagerService } from '../pizza-manager.service';
import { CartManagerService } from '../cart-manager.service';


@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.page.html',
  styleUrls: ['./pizza-list.page.scss'],
})
export class PizzaListPage implements OnInit {
  
  
  
  public cartManagerService:CartManagerService;
  
  constructor(public alertController: AlertController, public pizzaManager: PizzaManagerService, public cartManager:CartManagerService) {
  }
  
  ngOnInit() {
    this.pizzaManager.selectedPizza.subscribe(message => this.pizzaSelected = message);
    this.pizzaManager.pizzaList.subscribe(message => this.pizzaList = message)
    this.cartManager.cart.subscribe(message => this.cartCounter = message.length);
  }
  
  cartCounter = 0;

  changeSelectedPizza(value){
    this.pizzaManager.changePizzaSelected(value);
    
  }

  pizzaSelected;

  pizzaList = [];

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
