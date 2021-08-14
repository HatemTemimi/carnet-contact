import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import * as faker from 'faker/locale/en_US';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [
        { id:faker.random.uuid(), nom: faker.internet.domainName(), prenom:faker.name.findName(),dateDeNaissance:faker.date.future()},
        { id:faker.random.uuid(), nom: faker.internet.domainName(), prenom:faker.name.findName(), dateDeNaissance:faker.date.future()},
        { id:faker.random.uuid(), nom: faker.internet.domainName(), prenom:faker.name.findName(), dateDeNaissance:faker.date.future()},
   ];
    return {contacts};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  
}