import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; 

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import {ContactService} from './contats.service';

import { AppComponent }   from './app.component';
import { ContactsComponent } from './contacts.component';
import { CreateContactComponent } from './create.contact.component';
import { ContactDetailComponent } from './component-detail.component';



@NgModule({
    imports: [
        BrowserModule,
        routing,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        HttpModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        AppComponent,
        ContactsComponent,
        CreateContactComponent,
        ContactDetailComponent
    ],
    providers: [ContactService],
    bootstrap: [AppComponent]
})

export class AppModule { }
