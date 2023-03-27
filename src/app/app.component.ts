import {Component, Input} from '@angular/core';
import {Recipe} from "./recipes/recipe/recipe";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OnlyFood';

  recipe: Recipe[] = [
    {
      "title": "Spaghetti Carbonara",
      "category": "Pasta",
      "ingredients": [
        {name: "olijfolie", amount: "scheutjes",},
        {name: "boter", amount: "klontjes"},
        {name: "gerookt spek", amount: "250g"},
        {name: "eieren", amount: "5"},
        {name: "Parmezaanse kaas in een blok", amount: "200g"},
        {name: "peper van de molen", amount: "-"}
      ],
      "visual": "../assets/images/visual-carbonara.jpg",
      "recept": "Place onions and red peppers in a 4- or 5-qt. slow cooker. Add beef, soup mix and broth. Cook, covered, on low 6-8 hours or until" +
        " meat is tender., Arrange buns on a baking sheet, cut side up. Using tongs, place meat mixture on bun bottoms; top with cheese., Broil" +
        " 2-3 in. from heat 30-60 seconds or until cheese is melted and bun tops are toasted.",
      "preparationTime": "30 min",
      "rating": 3,
      "ratingKids": 1
    },
  ];
 

  

 /* public theme: string | undefined = 'theme--light';
  public select: string | undefined;
  @Input() dark: boolean = false;


  public changeTheme($event: Event): void {
    this.theme = this.select;
      this.dark = this.theme !== "theme--light";
  }*/

  darkmode = false;
  changeTheme(theme: string) {
    document.body.classList.remove('brand-1', 'brand-2', 'brand-3');
    document.body.classList.add(theme);
  }

  changeBrand(theme: MatSlideToggleChange) {
    document.body.classList.remove('dark-theme', 'light-theme');
    if(theme.checked){
      document.body.classList.add('dark-theme');
    }
    else{
      document.body.classList.add('light-theme');
    }
  }

  ngOnInit() {

  }


}
