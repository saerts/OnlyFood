import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-nav',
  template: `
	  <button mat-icon-button aria-label="Back">
		  <mat-icon>keyboard_backspace</mat-icon>
	  </button>
    <button mat-icon-button aria-label="Back">
	    <mat-icon>more_horiz</mat-icon>
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
