import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ExampleComponent } from './example/example.component';
import { HomeComponent } from './components/home.component';
import { RouteParamComponent } from './components/third/RouteParam.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { QueryStringComponent } from './components/query-string/query-string.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { FormExampleComponent } from './components/example/form-example/form-example.component';
import { RoutingComponent } from './components/example/routing/routing.component';
import { AddSessionComponent } from './components/session/add-session/add-session.component';
import { MyDirectiveDirective } from './my-directive.directive';

const routes: Routes = [
  { path: 'example', component: ExampleComponent },
  { path: 'studentList', component: StudentListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'routeParam/:id/:name', component: RouteParamComponent },
  { path: 'queryString', component: QueryStringComponent },

  { path: 'example/formExample', component: FormExampleComponent },
  { path: 'example/routing', component: RoutingComponent },

  { path: 'session', component: AddSessionComponent },

  { path: 'home2', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
   declarations: [
      MyDirectiveDirective
   ],
   imports: [
	 CommonModule,
	 ,RouterModule.forRoot(routes)
	],
   exports: [
      RouterModule
   ]
})
export class AppRoutingModule { }
