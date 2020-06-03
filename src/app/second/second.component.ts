import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app1-second',
  template: `
    <p>
      second works!
    </p>
    Query Id value : {{paramValue}}
    <br>
    Param Id value : {{id}}
  `,
  styles: [
  ]
})
export class SecondComponent implements OnInit {

  paramValue;
  id;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    // Method 1
    this.id = this.route.snapshot.paramMap.get('id');

    // Method 2
    this.route.paramMap.subscribe(params => {
      this.paramValue = params.get('id');
    })
  }

}
