import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
// import {Router, RouterModule} from '@angular/router';
// import {MyRouteModule} from './myRouteModule'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ExampleComponent } from './example/example.component';
import { SecondComponent } from './second/second.component';
import { RouteParamComponent } from './components/third/RouteParam.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { QueryStringComponent } from './components/query-string/query-string.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentService } from './services/student.service';
import { AddSessionComponent } from './components/session/add-session/add-session.component';
import { FormExampleComponent } from './components/example/form-example/form-example.component';
import { RoutingComponent } from './components/example/routing/routing.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      ExampleComponent,
      SecondComponent,
      RouteParamComponent,
      PageNotFoundComponent,
      QueryStringComponent,
      StudentListComponent,
      AddSessionComponent,
      FormExampleComponent,
      RoutingComponent
   ],
   imports: [
	 BrowserModule,FormsModule,AppRoutingModule,HttpClientModule
	],
   providers: [
      StudentService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { 
}
