import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContactService } from './contats.service';
import { Contact } from './contact';


@Component({
    moduleId: module.id,
    selector: 'selector',
    templateUrl: 'contact-detail.component.html'
})
export class ContactDetailComponent implements OnInit {

    contact: Contact;
    constructor(private _contactService: ContactService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this._contactService.getcontact(id)
                .then(contact => this.contact = contact);
        });

    }

    save(){
        this._contactService.update(this.contact)
        .then(this.goBack);
    }

    goBack() {
        window.history.back();
    }
}