import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  ingredients: Ingredient[];

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
        this.ingredients = JSON.parse(JSON.stringify(this.recipe.ingredients));
        this.setDefault();
      }
    );
  }

  onAddToShoppingList(): void {
    // Update shopping list based on ingredients with modified quantities
    this.recipeService.addToShoppingList(this.ingredients);
  }

  onDeleteRecipe(): void {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipe-book']);
  }

  onAdjustQuantities(multiplier: number): void {
    for (let i = 0; i < this.ingredients.length; i++) {
      this.ingredients[i].amount = this.recipe.ingredients[i].amount * multiplier;
    }
  }

  setDefault(): void {
    document.getElementById('halveLabel').setAttribute('class', 'btn btn-secondary');
    document.getElementById('doubleLabel').setAttribute('class', 'btn btn-secondary');
    document.getElementById('defaultLabel').setAttribute('class', 'btn btn-secondary active');
  }
}
