import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [
        { id:1, Nom: 'Hatem', Prénom: 'Temimi', Date: 35000 , Addresse: 'Tunisia'},
        { id:2, Nom: 'Hatem', Prénom: 'Temimi', Date: 35000 , Addresse: 'Tunisia'},
        { id:3, Nom: 'Hatem', Prénom: 'Temimi', Date: 35000, Addresse: 'Tunisia'},
   
      
    ];
    return {contacts};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  
}