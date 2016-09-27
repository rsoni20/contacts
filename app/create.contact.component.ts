import { Component, OnInit } from '@angular/core';
import { ContactService } from './contats.service';
import { Contact } from './contact';
import { Router } from '@angular/router'


@Component({
    moduleId: module.id,
    selector: '',
    templateUrl: 'create-contact.component.html',
    styleUrls:['style.css']
})
export class CreateContactComponent implements OnInit {
    constructor(private _contactService: ContactService, private router: Router) { }
    newContact: Contact = new Contact();


    ngOnInit() { }

    add(): void {
        // this.newContact.name = this.newContact.name.trim();
        // this.newContact.phoneNo = this.newContact.phoneNo.trim();

        if (!this.newContact.name || !this.newContact.phoneNo) { return; }

        let link = ["/contacts"];

        this._contactService.create(this.newContact)
            .then(() => {
                this.router.navigate(link);
            })
    }


    
}