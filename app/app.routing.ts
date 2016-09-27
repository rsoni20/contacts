import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ContactsComponent } from './contacts.component';
import { CreateContactComponent } from './create.contact.component';
import { ContactDetailComponent } from './component-detail.component';


const appRoutes: Routes = [
    { path: 'detail/:id', component: ContactDetailComponent },
    { path: '', redirectTo: '/contacts', pathMatch: 'full' },
    { path: 'contacts', component: ContactsComponent },
    { path: 'create-contact', component: CreateContactComponent }

];


export class NameRoutingModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 