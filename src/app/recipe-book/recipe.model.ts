import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  constructor(
    public name: string,
    public description: string,
    public imgPath: string,
    public ingredients: Ingredient[]
  ) { }
}
