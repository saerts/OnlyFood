import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipes/recipe/recipe";
import {Ingredient} from "./ingredient";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  /*@Input() ingredient: Ingredient|null = null;*/
  /*public ingredientItem: Ingredient[] = this.ingredient;*/

  constructor() { }

  ngOnInit(): void {
    //console.log('rec: ', this.ingredient);
  }

}
