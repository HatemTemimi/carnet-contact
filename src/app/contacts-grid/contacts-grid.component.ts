import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact/contact.service';
import { Contact } from '../interfaces/contact';
import {Router} from "@angular/router";


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
        { field: 'type' , rowGroup:true},
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

  rowData: Contact[] = [];

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
    this.rowData = await this.contactService.getContacts();
    console.log('row data : ' + JSON.stringify(this.rowData));
  }

  async deleteContact(id: string) {
    await this.contactService.deleteContact(id);
    this.rowData = this.rowData.filter(row => row.id !== id);
  }

  async modifyContact(event) {
    this.router.navigate(['/form/' + event.data.id]);
  }

}
