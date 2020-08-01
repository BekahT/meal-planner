import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  constructor(private _snackBar: MatSnackBar) { } 

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
    this.ingredientsChanged.next(this.ingredients.slice());
    // Show success notification
    const config = new MatSnackBarConfig();
    config.panelClass = ['snackbar-notification'];
    config.duration = 3000;
    this._snackBar.open(newIngredient.name + ' has been added to the Shopping List', 'Dismiss', config);
  }

  addIngredients(newIngredients: Ingredient[]){
    this.ingredients.push(...newIngredients);
    this.ingredientsChanged.next(this.ingredients.slice());
    // Show success notification
    const config = new MatSnackBarConfig();
    config.panelClass = ['snackbar-notification'];
    config.duration = 3000;
    this._snackBar.open('Ingredients have been added to the Shopping List', 'Dismiss', config);
  }
}