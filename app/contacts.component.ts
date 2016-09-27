import { Component, OnInit } from '@angular/core';

import { ContactService } from './contats.service';
import { Contact } from './contact';
import { Router } from '@angular/router';



@Component({
    moduleId: module.id,
    selector: 'selector',
    templateUrl: 'contacts.component.html',
    styleUrls: ['contacts.component.css']
})
export class ContactsComponent implements OnInit {
    contacts: Contact[];
    deleteContact: string = "Delete";

    constructor(private _contactService: ContactService, private router:Router) { }

    ngOnInit() {
        this.loadData();
    }


    loadData() {
        this._contactService.getContacts()
            .then(contacts => {
                this.contacts = contacts;
            });
    }

    delete(contact) {
        this._contactService.delete(contact.id)
            .then(() => {
                this.contacts = this.contacts.filter(c => c !== contact);
            });
    }


    gotoDetail(contact){
        let link = ['/detail', contact.id];
        this.router.navigate(link);

    }
}