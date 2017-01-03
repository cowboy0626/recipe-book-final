import { Component, OnInit } from '@angular/core';
import { RecipeService } from './../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'rbf-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
