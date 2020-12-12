import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Recipe } from '../recipe-book/recipe.model';
import { RecipeService } from '../recipe-book/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  endPointURL: string = 'https://qu-meal-planner-default-rtdb.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, private recipesService: RecipeService) { }

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    // Overwrite all recipes with current list
    this.http.put(this.endPointURL, recipes).subscribe();
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(this.endPointURL).pipe(map(recipes => {
      // if no ingredients, set it to an empty array
      return recipes.map(recipe => {
        return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
      });
    }),
      tap(recipes => {
        this.recipesService.setRecipes(recipes);
      })
    )
  }
}
