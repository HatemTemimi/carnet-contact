import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-grid',
  templateUrl: './contacts-grid.component.html',
  styleUrls: ['./contacts-grid.component.scss']
})
export class ContactsGridComponent implements OnInit {

   columnDefs = [
        { field: 'Nom' },
        { field: 'Prénom' },
        
        { field: 'Date'},
        { field: 'Addresse'},
      ];

    rowData = [
        { Nom: 'Hatem', Prénom: 'Temimi', Date: 35000 , Addresse: 'Tunisia'},
        { Nom: 'Hatem', Prénom: 'Temimi', Date: 35000 , Addresse: 'Tunisia'},
        { Nom: 'Hatem', Prénom: 'Temimi', Date: 35000, Addresse: 'Tunisia'},
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
