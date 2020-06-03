import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app1-my-component',
  template: `
   <p>
  		my-component Works!
   </p>
  `,
  styles: []
})
export class MyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
