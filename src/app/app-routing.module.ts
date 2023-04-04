import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RecipeComponent} from "./components/recipes/recipe/recipe.component";
import {RecipeListComponent} from "./components/recipes/recipe-list/recipe-list.component";

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipeListComponent,
  },
  {
    path: 'recipe',
    component: RecipeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
