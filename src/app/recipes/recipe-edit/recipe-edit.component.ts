import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';

import { Recipe } from './../recipe';
import { RecipeService } from './../recipe.service';

@Component({
  selector: 'rbf-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: []
})
export class RecipeEditComponent implements OnInit {

  recipeForm: FormGroup;
  private recipeIndex: number;
  private recipe: Recipe;
  private isNew = true;
  private subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService, 
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        // 수정모드 
        if(params.hasOwnProperty('id')){
          this.isNew = false;
          this.recipeIndex = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
        } else {
          // 추가모드 
          this.isNew = true;
          this.recipe = null;
        }
        this.initForm();
      }
    );
  }

  private initForm(){
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);

    if(!this.isNew){
      // 수정모드일 경우 
      if(this.recipe.hasOwnProperty('ingredients')){
        // 재료가 있을 경우 
        for(let i=0; i<this.recipe.ingredients.length; i++){
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(this.recipe.ingredients[i].name, Validators.required), 
              amount: new FormControl(this.recipe.ingredients[i].amount, [Validators.required, Validators.pattern("\\d+")])
            })
          );
        }
      }
      recipeName = this.recipe.name;
      recipeImageUrl = this.recipe.imagePath;
      recipeContent = this.recipe.description;
    }
    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required], 
      imagePath: [recipeImageUrl, Validators.required], 
      description: [recipeContent, Validators.required], 
      ingredients: recipeIngredients
    });
  }

  onSubmit(){
    this.navigateBack();
  }

  private navigateBack(){
    this.router.navigate(['../']);
  }

}
