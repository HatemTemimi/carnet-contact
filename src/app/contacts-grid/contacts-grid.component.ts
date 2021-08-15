import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-contacts-grid',
  templateUrl: './contacts-grid.component.html',
  styleUrls: ['./contacts-grid.component.scss']
})
export class ContactsGridComponent implements OnInit {

  defaultColDef;

  columnDefs = [
    {
      headerName: 'Personne',
      children: [
        { field: 'nom' },
        { field: 'prenom' },
        { field: 'dateDeNaissance' },
      ]
    },
    {
      headerName: 'Addresses',
      children: [
        { field: 'type' },
        { field: 'rue'},
        { field: 'ville'},
        { field: 'numero' },
        { field: 'pays' },
        { field: 'codePostal',columnGroupShow: 'closed' },
        { field: 'commentaire', columnGroupShow: 'closed' },
        { field: 'numeroTel', columnGroupShow: 'closed' }
      ],

    }
  ];

  rowData: {
    id: number,
    name: string,
    prenom: string,
    dateDeNaissance?: string,
    type?: string,
    rue?: string,
    ville?: string,
    numero?: number,
    pays?: string,
    codePostal?: number,
    commentaire?: string,
    numeroTel?: number
  }[] = [];

  initialized = false;

  constructor(
    private router: Router,
    private contactService: ContactService
  ) {
     this.defaultColDef = {
      flex: 1,
      minWidth: 100,
      resizable: true,
    };
  }

  async ngOnInit() {
    const contacts = await this.contactService.getContacts();
    for (const contact of contacts) {
      if (!contact.addresses) {
        this.rowData.push({
          id: contact.id,
          name: contact.nom,
          prenom: contact.prenom,
          dateDeNaissance: contact.dateDeNaissance
        });
        continue;
      }
      for (const address of contact.addresses) {
        this.rowData.push({
          id: contact.id,
          name: contact.nom,
          prenom: contact.prenom,
          dateDeNaissance: contact.dateDeNaissance,
          type: address.type,
          rue: address.rue,
          ville: address.ville,
          numero: address.numero,
          pays: address.pays,
          codePostal: address.codePostal,
          commentaire: address.commentaire,
          numeroTel: address.numeroTel
        });
      }
    }
    this.initialized = true;
    console.log('row data : ' + JSON.stringify(this.rowData));
  }

  async deleteContact(id: number) {
    await this.contactService.deleteContact(id);
    this.rowData = this.rowData.filter(row => row.id !== id);
  }

  async modifyContact(event) {
    await this.router.navigate(['/form/' + event.data.id]);
  }

}
