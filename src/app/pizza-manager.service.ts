import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaManagerService {
  
  constructor() { }

  addPizza(product) {         // Add pizza to this.pizzas
    this.pizzas.value.push(product);
  }

  addIngredient(ingredient){  // Add an ingredient
    this.ingredients.value.push(ingredient);
  }

  removePizza(id){            // Delete element from this.pizzas at id
    if(id > -1 && id < this.pizzas.value.length){
      this.pizzas.value.splice(id, 1);
    }else{
      console.log("Error: id not in array length");
    }
  }

  removeIngredient(id){       // Delete element from this.ingredient at id
    if(id > -1 && id < this.ingredients.value.length){
      this.ingredients.value.splice(id, 1);
    }else{
      console.log("Error: id not in array length");
    }
  }

  private ingredients = new BehaviorSubject([
    {
      "id": 9,
      "nom": "Merguez"
    },
    {
      "id": 10,
      "nom": "Tomate"
    },
    {
      "id": 11,
      "nom": "Poivrant"
    },
    {
      "id": 12,
      "nom": "Champignon"
    },
    {
      "nom": "Patate",
      "id": 13
    },
    {
      "id": 14,
      "nom": "Mozzarella"
    },
    {
      "nom": "Olive",
      "id": 15
    },
    {
      "id": 16,
      "nom": "Chèvre"
    },
    {
      "id": 17,
      "nom": "Miel"
    },
    {
      "id": 18,
      "nom": "Jambon"
    },
    {
      "nom": "Harissa",
      "id": 19
    },
    {
      "id": 20,
      "nom": "Poivrant "
    },
    {
      "nom": "😉",
      "id": 21
    },
    {
      "nom": "Arc-En-Ciel",
      "id": 22
    },
    {
      "id": 25,
      "nom": "kishla "
    }
  ]);
  allIngredients = this.ingredients.asObservable();



  private pizzas = new BehaviorSubject([
    {
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
        "price": 15,
        "name": "Pepperoni",
        "photo": "https://media.giphy.com/media/9fuvOqZ8tbZOU/giphy.gif"
    },
    {
        "id": 17,
        "ingredients": [
            11,
            12,
            16,
            20
        ],
        "price": 12,
        "name": "Mandalorian",
        "photo": "https://i.skyrock.net/3395/58823395/pics/3233667843_1_2_vPvHZqps.jpg"
    },
    {
        "id": 18,
        "ingredients": [
            11,
            12,
            14,
            17,
            18,
            19,
            20,
            21
        ],
        "price": 9,
        "name": "Royalety",
        "photo": "https://s2.qwant.com/thumbr/0x0/d/9/2cfa30661ee0ef3e0bde77186f726709ad6dfbda1d3fc27269167b4d6cdf35/i95731-pizza-royale.jpg?u=https%3A%2F%2Fstatic.cuisineaz.com%2F610x610%2Fi95731-pizza-royale.jpg&q=0&b=1&p=0&a=1"
    }
  ]);

  pizzaList = this.pizzas.asObservable();

  private sourcePizza = new BehaviorSubject({"id": 16,
                                            "ingredients": [
                                                9,
                                                10,
                                                11,
                                                12,
                                                13,
                                                14,
                                                17
                                            ],
                                            "price": 15,
                                            "name": "Pepperoni",
                                            "photo": "https://media.giphy.com/media/9fuvOqZ8tbZOU/giphy.gif"});
  selectedPizza = this.sourcePizza.asObservable();

  changePizzaSelected(pizza){
    this.sourcePizza.next(pizza);
  }

}
