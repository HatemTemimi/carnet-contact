import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder,FormGroup, FormArray, Form } from '@angular/forms';
import {Contact} from "../interfaces/contact";
import {ContactService} from "../services/contact/contact.service";
import {formatDate} from "@angular/common";
import * as faker from "faker/locale/en_US";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;

  contactId;

  contact?: Contact;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private route: ActivatedRoute
  ) {
    this.contactForm = this.formBuilder.group({
      nom: this.formBuilder.control(''),
      prenom: this.formBuilder.control(''),
      date : this.formBuilder.control(''),
      addresses: this.formBuilder.array([this.creeAddresse()])
    });
  }

  get addresses(): FormArray {
    return this.contactForm?.get('addresses') as FormArray;
  }

  ajouterAddresse() {
    let addressesArr = this.contactForm?.get('addresses') as FormArray;
    addressesArr.push(this.creeAddresse());
  }

  creeAddresse(address?: {
    type: string,
    rue: string,
    numero: number,
    ville: string,
    codePostal: number,
    pays: string,
    commentaire: string,
    numeroTel: number
  }): FormGroup {
    return this.formBuilder.group({
      type: this.formBuilder.control(!this.contactId ? '' : address?.type),
      rue: this.formBuilder.control(!this.contactId ? '' : address?.rue),
      ville: this.formBuilder.control(!this.contactId ? '' : address?.ville),
      numero: this.formBuilder.control(!this.contactId ? '' : address?.numero),
      codePostal: this.formBuilder.control(!this.contactId ? '' : address?.codePostal),
      pays: this.formBuilder.control(!this.contactId ? '' : address?.pays),
      commentaire: this.formBuilder.control(!this.contactId ? '' : address?.commentaire),
      numeroTel: this.formBuilder.control(!this.contactId ? '' : address?.numeroTel),
    });
  }

  supprimerAddresse(i: number) {
    let addressesArr = this.contactForm?.get('addresses') as FormArray;
    addressesArr.removeAt(i);
  }

  async onSubmit() {
    console.log(this.contactForm.value.date);
    const contact = new Contact({
      id: this.contactId ? this.contact?.id : faker.random.number(1000),
      nom: this.contactForm?.value.nom,
      prenom: this.contactForm?.value.prenom,
      dateDeNaissance: formatDate(this.contactForm?.value.date, 'yyyy-MM-dd', 'en-US'),
      addresses: this.contactForm?.value.addresses
    });
    this.contactId ? await this.contactService.putContact(contact) : await this.contactService.postContact(contact);
  }

  async ngOnInit() {
    this.contactId = this.route.snapshot.paramMap.get('id');
    let addresses;
    if (this.contactId) {
      this.contact = await this.contactService.getContact(this.contactId);
      addresses = this.contact?.addresses ? this.contact.addresses.map(address => this.creeAddresse(address)) : [this.creeAddresse()];
    }
    this.contactForm = this.formBuilder.group({
      nom: this.formBuilder.control(!this.contactId ? '' : this.contact?.nom),
      prenom: this.formBuilder.control(!this.contactId ? '' : this.contact?.prenom),
      date : this.formBuilder.control(!this.contactId ? '' : new Date(this.contact?.dateDeNaissance ?? '')),
      addresses: this.formBuilder.array(!this.contactId ? [this.creeAddresse()] : addresses)
    });
    console.log(this.contactForm.controls.addresses['controls']);
  }

}
