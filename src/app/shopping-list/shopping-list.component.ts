import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients:Ingredients[] = [
    new Ingredients('Apples',10),
    new Ingredients('Tomatoes',10),
  ];
}