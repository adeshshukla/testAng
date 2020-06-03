import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class Student2Service {

  studList = [
      { RollNo:1, Name:"Student 1", Class:"10", Age:16},
      {  RollNo:2, Name:"Student 2", Class:"11", Age:17},
      { RollNo:3, Name:"Student 3", Class:"12", Age:18},
      { RollNo:4, Name:"Student 4", Class:"12", Age:35},
      { RollNo:5, Name:"Student 5", Class:"12", Age:35},
  ];
  constructor(private http:HttpClient) { }

  getStudentList(){
    return this.studList;
  }

  getStudentListAsync():Observable<any>{
    return of(this.studList);
  }

  getSessionFromDB(){
    return this.http.get('http://localhost:44304/api/session/GetAllSessions', {observe:'response'})
                      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse){
    console.log("Error print in service");
    console.log(error);   
    // Obsolete
    return Observable.throw(error.message || "Internal Server Error")

     return throwError('Something bad happened; please try again later.');
  }
}
