import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-nav',
  template: `
	  <nav>
	    <a [routerLink]="['recipe']">Recipe</a>
		  <a [routerLink]="['recipes']">Recipes</a>
	  </nav>
  `,
  styles: [``]
})
export class BottomNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
