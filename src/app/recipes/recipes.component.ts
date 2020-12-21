import { RecipeService } from './recipe.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  private recipeChanged: Subscription;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeChanged = this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }
  ngOnDestroy() {
    this.recipeChanged.unsubscribe();
  }
}
