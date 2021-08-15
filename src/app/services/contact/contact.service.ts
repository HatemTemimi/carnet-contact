import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../../interfaces/contact';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly CONTACT_API_URL = '/api/contacts/'

  constructor(private http: HttpClient) {}

  public async getContacts(): Promise<Contact[]> {
    return this.http.get<Contact[]>(this.CONTACT_API_URL).toPromise();
  }

  public async getContact(id: string): Promise<Contact> {
    console.log(this.CONTACT_API_URL + id);
    return this.http.get<Contact>(this.CONTACT_API_URL + id).toPromise();
  }

  public async postContact(c: Contact): Promise<Contact> {
    return this.http.post<Contact>(this.CONTACT_API_URL, c).toPromise();
  }

  public async putContact(c: Contact) {
    return this.http.put(this.CONTACT_API_URL + c.id, c).toPromise();
  }

  public async deleteContact(id: string) {
    return this.http.delete(this.CONTACT_API_URL + id).toPromise();
  }

  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return throwError(error);
  }

}
