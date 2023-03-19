import {Component, Input} from '@angular/core';
import {Recipe} from "./recipe";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {

  @Input() recipe: Recipe|null = null;
}
