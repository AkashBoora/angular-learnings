import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppipng-list.service';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome',
      'https://bakeitwithlove.com/wp-content/uploads/2022/09/chicken_schnitzel_sq.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://img.freepik.com/premium-photo/delicious-hamburger-with-tasty-ingredients_184700-4.jpg?w=826',
      [new Ingredient('Meat', 1), new Ingredient('Bread', 2)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}
