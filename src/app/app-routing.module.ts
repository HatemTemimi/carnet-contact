import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactsGridComponent } from './contacts-grid/contacts-grid.component';

const routes: Routes = [
  { path: 'home', component: ContactsGridComponent },
  { path: 'form/:id', component: ContactFormComponent },
  { path: 'form', component: ContactFormComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
