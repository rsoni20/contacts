"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ContactService = (function () {
    function ContactService(_http) {
        this._http = _http;
        this._contactsUrl = 'app/contacts';
        this._headers = new http_1.Headers({ 'content-type': 'application/json' });
    }
    ContactService.prototype.getContacts = function () {
        return this._http.get(this._contactsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ContactService.prototype.getcontact = function (id) {
        return this.getContacts()
            .then(function (contacts) { return contacts.find(function (contact) { return contact.id === id; }); });
    };
    ContactService.prototype.delete = function (id) {
        var url = this._contactsUrl + "/" + id;
        return this._http
            .delete(url, { headers: this._headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ContactService.prototype.create = function (newContact) {
        return this._http
            .post(this._contactsUrl, JSON.stringify(newContact))
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ContactService.prototype.update = function (contact) {
        var url = this._contactsUrl + "/" + contact.id;
        return this._http
            .put(url, JSON.stringify(contact), { headers: this._headers })
            .toPromise()
            .then(function () { return contact; })
            .catch(this.handleError);
    };
    ContactService.prototype.handleError = function (error) {
        console.log("An error occured", error);
        return Promise.reject(error.message || error);
    };
    ContactService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
//# sourceMappingURL=contats.service.js.map