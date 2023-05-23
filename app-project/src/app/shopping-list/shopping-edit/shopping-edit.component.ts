import {
  Component,
} from '@angular/core';
import { ShoppingListService } from '../shoppipng-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {

  constructor(private shoppingListService: ShoppingListService) {}

  onAddItem(form: NgForm) {
    const value = form.value;
    const ingName = value.name;
    const ingAmount = value.amount;
    this.shoppingListService.addIngredient({
      name: ingName,
      amount: ingAmount,
    });
  }
}
