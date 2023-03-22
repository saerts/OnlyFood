import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-nav',
  template: `
	  <button class="iconOnly">
		  <img src="../../assets/icons/back.svg"/>
	  </button>
	  <button class="iconOnly">
		  <img src="../../assets/icons/more.svg"/>
	  </button>
  `,
  styleUrls: ["top-nav.component.scss"]
})
export class TopNavComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
