import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  constructor(private _snackBar: MatSnackBar) { }

  private ingredients: Ingredient[] = [
    new Ingredient('bread', 2, 'slices'),
    new Ingredient('egg', 3, 'units'),
    new Ingredient('cinnamon', 1, 'tbs')
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice(); // return new array that is copy of the private one
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  addIngredient(newIngredient: Ingredient): void {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.next(this.ingredients.slice());
    // Show success notification
    const config = new MatSnackBarConfig();
    config.panelClass = ['snackbar-notification'];
    config.duration = 3000;
    this._snackBar.open(newIngredient.name + ' has been added to the Shopping List', 'Dismiss', config);
  }

  addIngredients(newIngredients: Ingredient[]): void {
    this.ingredients.push(...newIngredients);
    this.ingredientsChanged.next(this.ingredients.slice());
    // Show success notification
    const config = new MatSnackBarConfig();
    config.panelClass = ['snackbar-notification'];
    config.duration = 3000;
    this._snackBar.open('Ingredients have been added to the Shopping List', 'Dismiss', config);
  }

  updateIngredient(index: number, newIngredient: Ingredient): void {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number): void {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
