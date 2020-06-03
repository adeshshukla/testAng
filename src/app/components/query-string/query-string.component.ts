import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app1-query-string',
  template: `
    <p>
      query-string works!
      <br>
      Query String Values------
      <br>
      Id:{{id}}
      <br>
      Name : {{name}}
    </p>
  `,
  styles: [
  ]
})
export class QueryStringComponent implements OnInit {

  id;
  name;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.name = params['name'];
    });
  }

}
