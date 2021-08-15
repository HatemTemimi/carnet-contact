import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as faker from 'faker/locale/en_US';
import { Contact } from 'src/app/interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [
    
        { id: faker.datatype.number(1000), nom: faker.lorem.word(), prenom:faker.lorem.word(), dateDeNaissance: '1996-11-17',
          type:"domicile",
          rue:faker.address.streetAddress(),
          ville:faker.address.city(),
          numero:faker.datatype.number(10000),
          codePostal:faker.address.zipCode(),
          pays:faker.address.country(),
          commentaire:faker.lorem.sentence(),
          numeroTel:""},
        { id: faker.datatype.number(1000),nom: faker.lorem.word(), prenom:faker.lorem.word(),dateDeNaissance: '1996-11-17',
          type:"travail",
          rue:faker.address.streetAddress(),
          ville:faker.address.city(),
          numero:faker.datatype.number(10000),
          codePostal:faker.address.zipCode(),
          pays:faker.address.country(),
          commentaire:faker.lorem.sentence(),
          numeroTel:""},
        { id: faker.datatype.number(1000),nom: faker.lorem.word(), prenom:faker.lorem.word(),dateDeNaissance: '1996-11-17',
          type:"travail",
          rue:faker.address.streetAddress(),
          ville:faker.address.city(),
          numero:faker.datatype.number(10000),
          codePostal:faker.address.zipCode(),
          pays:faker.address.country(),
          commentaire:faker.lorem.sentence(),
          numeroTel:""},
         { id: faker.datatype.number(1000),nom: faker.lorem.word(), prenom:faker.lorem.word(),dateDeNaissance: '1996-11-17',
          type:"travail",
          rue:faker.address.streetAddress(),
          ville:faker.address.city(),
          numero:faker.datatype.number(10000),
          codePostal:faker.address.zipCode(),
          pays:faker.address.country(),
          commentaire:faker.lorem.sentence(),
          numeroTel:""}, 
        { id: faker.datatype.number(1000),nom: faker.lorem.word(), prenom:faker.lorem.word(),dateDeNaissance: '1996-11-17',
          type:"travail",
          rue:faker.address.streetAddress(),
          ville:faker.address.city(),
          numero:faker.datatype.number(10000),
          codePostal:faker.address.zipCode(),
          pays:faker.address.country(),
          commentaire:faker.lorem.sentence(),
          numeroTel:""},
        { id: faker.datatype.number(1000),nom: faker.lorem.word(), prenom:faker.lorem.word(),dateDeNaissance: '1996-11-17',
          type:"travail",
          rue:faker.address.streetAddress(),
          ville:faker.address.city(),
          numero:faker.datatype.number(10000),
          codePostal:faker.address.zipCode(),
          pays:faker.address.country(),
          commentaire:faker.lorem.sentence(),
          numeroTel:""},
        { id: faker.datatype.number(1000), nom: faker.lorem.word(), prenom:faker.lorem.word(), dateDeNaissance: '1996-11-17', addresses: [
          {
          type:"domicile",
          rue:faker.address.streetAddress(),
          ville:faker.address.city(),
          numero:faker.datatype.number(10000),
          codePostal:faker.address.zipCode(),
          pays:faker.address.country(),
          commentaire:faker.lorem.sentence(),
          numeroTel:"",
        },
        { id: faker.datatype.number(1000),nom: faker.lorem.word(), prenom:faker.lorem.word(),dateDeNaissance: '1996-11-17',
          type:"travail",
          rue:faker.address.streetAddress(),
          ville:faker.address.city(),
          numero:faker.datatype.number(10000),
          codePostal:faker.address.zipCode(),
          pays:faker.address.country(),
          commentaire:faker.lorem.sentence(),
          numeroTel:""},
      ],
        },
        ];
    return {contacts};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.

}
