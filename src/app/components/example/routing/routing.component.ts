import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app1-routing',
  template: `
    <p>
      Dynamic routing
    </p>
    
      <p>Dynamic routing from TS code: <button (click)="BtnClick()"> Go to Example </button></p>

      <p>Dynamic routing with params: <button (click)="BtnClickParams()"> Go to RouteParam page </button></p>

      <p>Dynamic routing with Query String: <button (click)="BtnClickQueryString()"> Go to QueryString Page</button></p>

  `,
  styles: [
  ]
})
export class RoutingComponent implements OnInit {

  constructor(private router:Router){}

  ngOnInit(): void {
  }

  BtnClick(){
    this.router.navigate(['/example'])
  }

  BtnClickParams(){
    this.router.navigate(['/routeParam',2,'dev'])
  }

  BtnClickQueryString(){
    let navigationExtras: NavigationExtras = {
      queryParams: { 'id': 200, 'name':'devbrat' }
    };
    
    this.router.navigate(['/queryString'], navigationExtras);
  }

}
