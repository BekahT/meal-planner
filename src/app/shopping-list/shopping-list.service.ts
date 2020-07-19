import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("bread", 2),
    new Ingredient("egg", 3),
    new Ingredient("cinnamon", 1)
  ];

  getIngredients() {
    return this.ingredients.slice(); // return new array that is copy of the private one
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}