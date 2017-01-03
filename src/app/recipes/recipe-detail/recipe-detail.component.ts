import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Recipe } from '../recipe';
import { RecipeService } from './../recipe.service';

@Component({
  selector: 'rbf-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit {

  private subscription: Subscription; 
  private recipeIndex: number; // 레시피 찾는 용도로 목록 아이템에서 라우터를 통해 전달될 값 
  private selectedRecipe: Recipe;

  constructor(
    private recipeService: RecipeService, 
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    //링크 및 라우팅을 통해서 선택된 레시피 정보 가져오기 
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
      }
    );
  }

  onEdit(){
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

}
