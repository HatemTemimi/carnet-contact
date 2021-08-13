import { Component, OnInit } from '@angular/core';

import { FormBuilder,FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-bloc-addresse',
  templateUrl: './bloc-addresse.component.html',
  styleUrls: ['./bloc-addresse.component.scss']
})
export class BlocAddresseComponent implements OnInit {

  public addressForm: FormGroup;
  
constructor(private fb: FormBuilder) {
  this.addressForm = this.fb.group({
     addresses: this.fb.array([ this.createAddress() ])
  });
}

  addAddress(): void {
    const addresses = this.addressForm.get('addresses') as FormArray;
    addresses.push(this.createAddress());
}



 createAddress(): FormGroup {
    return this.fb.group({
      address: '',
      street: '',
      city: '',
      country: ''
    });
 }

  ngOnInit(): void {
  }

}
