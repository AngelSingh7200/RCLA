import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse, } from '@angular/common/http';  
import  Event  from './event'
import  Contact  from './contact'
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  uri = 'http://localhost:8000/events';  
  contacts = 'http://localhost:8000/contacts'; 
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }
    // Get Users
    getUsers() {
      return this.http.get(this.uri)
    }
    getContacts() {  
      return this  
             .http  
             .get(`${this.contacts}`);  
    }  
    EditUsers(id) {
      return this.http.get(`${this.uri}/edit/${id}`);
    }
  
  // Create User
  addUser(profileImage: File,Eventtitle: string,EventDescription:string,bodyEvent:string): Observable<any> {
    var formData: any = new FormData();
    formData.append("avatar", profileImage);
    formData.append("Eventtitle", Eventtitle);
    formData.append("EventDescription", EventDescription);
    formData.append("bodyEvent", bodyEvent);
  

    return this.http.post<Event>(`${this.uri}/add`, formData, {
      reportProgress: true,
      observe: 'events'
    })
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }



}
