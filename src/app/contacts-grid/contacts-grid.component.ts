import { Component, OnInit } from '@angular/core';
import { AllCommunityModules } from '@ag-grid-community/all-modules';





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
            {field: 'Nom'},
            {field: 'Prénom'},
            {field: 'DDN'},
        ]
      },
      {
        headerName: 'Addresses',
        children:[
          {field: 'type'},
          {field: 'Rue'},
          {field: 'Ville'},
          {field: 'Numero'},
          {field: 'Pays'},
          {field: 'Commentaire', columnGroupShow: 'closed',},
          {field: 'Numero téléphone', columnGroupShow: 'closed',}
        ]
      },
      
        
      ];

    rowData = [
        { Nom: 'Hatem', Prénom: 'Temimi', Date: 35000 , Addresse: 'Tunisia', country: 'Tun', sport:'foot'},
        { Nom: 'Hatem', Prénom: 'Temimi', Date: 35000 , Addresse: 'Tunisia',country: 'Tun', sport:'foot'},
        { Nom: 'Hatem', Prénom: 'Temimi', Date: 35000, Addresse: 'Tunisia', country: 'Tun', sport:'foot'},
    ];

  constructor() {
     this.defaultColDef = {
      flex: 1,
      minWidth: 150,
      resizable: true,
    };
   }

  ngOnInit(): void {
  }

}
