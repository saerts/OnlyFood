import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import {TopNavComponent} from "./top-nav/top-nav.component";

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
