import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app1-my-component2',
  template: `
   <p>
  		my-component2 Works!
   </p>
  `,
  styles: []
})
export class MyComponent2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
