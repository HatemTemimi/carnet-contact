import { Component, OnInit } from '@angular/core';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { ContactServiceService } from '../services/contact/contact-service.service';
import { Contact } from '../interfaces/contact';

import * as faker from 'faker/locale/en_US';



@Component({
  selector: 'app-contacts-grid',
  templateUrl: './contacts-grid.component.html',
  styleUrls: ['./contacts-grid.component.scss']
})
export class ContactsGridComponent implements OnInit {
  
  public defaultColDef;

  columnDefs = [
        { headerName: 'Personnes',
        children: [
            {field: 'nom'},
            {field: 'prenom'},
            {field: 'dateDeNaissance'},
        ]
      },
      {
        headerName: 'Addresses',
        children:[
          
          {field: 'type'},
          {field: 'rue'},
          {field: 'ville'},
          {field: 'numero'},
          {field: 'codePostal',columnGroupShow: 'closed'},
          {field: 'pays'},
          {field: 'commentaire', columnGroupShow: 'closed',},
          {field: 'numeroTel', columnGroupShow: 'closed',}
        ]
      },
  ];

  rowData: Contact[] = [];

  
  

  constructor(private myServ: ContactServiceService) {
     this.defaultColDef = {
      flex: 1,
      minWidth: 100,
      resizable: true,
    };
   }

  ngOnInit(): void {
    this.myServ.getContacts().subscribe(data=>{
       this.rowData = data;
      console.log(data);
    
    });
    
  }

}
