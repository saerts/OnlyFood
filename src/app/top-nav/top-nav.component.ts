import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-nav',
  template: `
	  <button>
		  <img src="../../assets/icons/back.svg"/>
	  </button>
	  <button>
		  <img src="../../assets/icons/more.svg"/>
	  </button>
  `,
  styles: [`
	  :host{
		  display:flex;
		  align-items:center;
		  justify-content:space-between;
	  }

  `]
})
export class TopNavComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
