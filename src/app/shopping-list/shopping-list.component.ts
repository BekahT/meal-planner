import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("bread", 2),
    new Ingredient("egg", 3),
    new Ingredient("cinnamon", 1)
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
