import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Http, Headers }  from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactService {

    private _contactsUrl = 'app/contacts';

    constructor(private _http: Http) { }

    getContacts(): Promise<Contact[]> {
        return this._http.get(this._contactsUrl)
            .toPromise()
            .then(response => response.json().data as Contact[])
            .catch(this.handleError);
    }

    getcontact(id:number):Promise<Contact>{
        return this.getContacts()
        .then(contacts=> contacts.find(contact => contact.id ===id));
    }

    private _headers = new Headers({'content-type':'application/json'});

    delete(id:number):Promise<any>{
        let url =`${this._contactsUrl}/${id}`
        return this._http
        .delete(url, {headers:this._headers})
        .toPromise()
        .then(()=>null)
        .catch(this.handleError);
    }

    create(newContact:Contact):Promise<Contact>{
        return this._http
        .post(this._contactsUrl, JSON.stringify(newContact))
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }


    update(contact:Contact):Promise<Contact>{
        const url = `${this._contactsUrl}/${contact.id}`;

        return this._http
        .put(url, JSON.stringify(contact), {headers:this._headers})
        .toPromise()
        .then(()=>contact)
        .catch(this.handleError);
    }


    private handleError(error): Promise<any> {
        console.log("An error occured", error)
        return Promise.reject(error.message || error);
    }

}