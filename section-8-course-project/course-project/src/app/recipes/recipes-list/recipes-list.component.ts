import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes:Recipe[] = [

    new Recipe('A test Recipe', 'This is a simple test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another test Recipe', 'This is a simple test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')

  ]

  onRecipeSelected(recipe:Recipe) {

    this.recipeWasSelected.emit(recipe)

  }

}
