import { Component, OnInit } from '@angular/core';

import { FormBuilder,FormGroup, FormArray, Form } from '@angular/forms';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;

  get addresses(): FormArray {
    return this.contactForm.get('addresses') as FormArray;
  }

  ajouterAddresse() {
    
    let addressesArr = this.contactForm.get('addresses') as FormArray;
    addressesArr.push(this.creeAddresse());
  }
  creeAddresse(): FormGroup{
    return this.formBuilder.group({
      type: this.formBuilder.control(''),
      rue: this.formBuilder.control(''),
      ville: this.formBuilder.control(''),
      numero: this.formBuilder.control(''),
      pays: this.formBuilder.control(''),
      commentaire: this.formBuilder.control(''),
      numeroTel: this.formBuilder.control(''),

    })
  }
  supprimerAddresse(i: number){

    let addressesArr = this.contactForm.get('addresses') as FormArray;
    addressesArr.removeAt(i);
  }
  
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      nom: formBuilder.control(''),
      prénom: formBuilder.control(''),
      date : formBuilder.control(''),
    addresses:  formBuilder.array([this.creeAddresse()])

    })


   }
   onSubmit() {
   console.log('form data is ', this.contactForm.value);
  }

  ngOnInit(): void {

    console.log(this.contactForm.controls.addresses['controls']);

    
  }

}
