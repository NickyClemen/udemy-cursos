import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

import { ShoppingListService } from './../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  public recipeSelected = new EventEmitter<Recipe>();

  private recipes:Recipe[] = [

    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]
    ),
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps6498_MRR133247D07_30_5b_WEB-2.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    )

  ];

  constructor(private slService:ShoppingListService) {}

  getRecipes() {

    return this.recipes.slice();

  }

  addIngredientsToShoppingList(ingredients:Ingredient[]) {

    this.slService.addIngredients(ingredients);

  }

}

