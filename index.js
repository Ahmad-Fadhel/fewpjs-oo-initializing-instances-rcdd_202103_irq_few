// Write your code here

class Breakfast{
  constructor(food, drink){
    this.food = food;
    this.drink = drink;
  }
}

class Lunch{
  constructor(salad,soup, drink, dessert){
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
    this._dessert = dessert;
  }
}

class Dinner{
  constructor(salad,soup, entree){
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
  }
}

const dinner = new Dinner ()