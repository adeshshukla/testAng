import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Location}from '@angular/common';

@Component({
  selector: 'app1-third',
  template: `
    <p>
      third works!
      <br>
      Id: {{id}}
      Name: {{name}}
    </p>

    <button (click)="goBack()">Back</button>
  `,
  styles: [
  ]
})
export class RouteParamComponent implements OnInit {

  id; name;
  
  constructor(private route: ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.name = this.route.snapshot.paramMap.get('name');
  }

  goBack(){
    this.location.back();
  }

}
