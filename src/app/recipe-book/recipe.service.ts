import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new Subject<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe("French Toast",
      "Bread covered in eggs and stuff",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
      [
        new Ingredient('Bread', 3),
        new Ingredient('Egg', 5),
        new Ingredient('Blueberry', 20),
        new Ingredient('Banana', 1)
      ]),
    new Recipe("Pancakes",
      "Fluffy batter with berries",
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      [
        new Ingredient('Pancake Mix', 1),
        new Ingredient('Milk', 1),
        new Ingredient('Blueberry', 20)
      ]),
    new Recipe("Avocado Toast",
      "Bread piled high with expensive avocado and eggs",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=653&q=80",
      [
        new Ingredient('Bread', 2),
        new Ingredient('Spinach', 5),
        new Ingredient('Egg', 2),
        new Ingredient('Avocado', 1)
      ]),
    new Recipe("Mediterranean Salad",
      "Lots of healthy stuff topped with olives and cheese",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      [
        new Ingredient('Lettuce Mix', 1),
        new Ingredient('Red Onion', 1),
        new Ingredient('Shredded Cheese', 1),
        new Ingredient('Black Olive', 5),
        new Ingredient('Green Olive', 5),
        new Ingredient('Pecan', 3)
      ]),
    new Recipe("Pumpkin Soup",
      "A perfect soup for fall, made from pumpkin",
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      [
        new Ingredient('Pureed Pumpkin', 1),
        new Ingredient('Pumpkin Seed', 8),
        new Ingredient('Mozzarella Cheese', 2)
      ]),
    new Recipe("Salmon and Zucchini",
      "Beautiful salmon layered with spinach and zucchini and drizzeled with balsamic",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      [
        new Ingredient('Salmon', 1),
        new Ingredient('Zucchini', 1),
        new Ingredient('Spinach', 2),
        new Ingredient('Balsamic Vinaigrette', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // return new array that is copy of the private one
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
