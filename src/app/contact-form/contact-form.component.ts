import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      nom: formBuilder.control(''),
      prénom: formBuilder.control(''),
      date : formBuilder.control(''),
      addresse: formBuilder.control(''),

    })


   }
   onSubmit() {
   console.log('form data is ', this.contactForm.value);
  }

  ngOnInit(): void {
  }

}
