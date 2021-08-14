import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../../interfaces/contact';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  private readonly CONTACT_API_URL = '/api/contacts'

  constructor(private http: HttpClient) {  }


    public getContacts(): Observable<Contact[]> {
    
      return this.http.get<Contact[]>(this.CONTACT_API_URL).pipe(
        catchError(this.handleError));
    }

    public addContact(c: Contact){
      return this.http.post<Contact>(this.CONTACT_API_URL,c).pipe(
        catchError(this.handleError));
    }

  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return throwError(error);
  }

  
 

}
