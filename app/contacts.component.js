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
var contats_service_1 = require('./contats.service');
var router_1 = require('@angular/router');
var ContactsComponent = (function () {
    function ContactsComponent(_contactService, router) {
        this._contactService = _contactService;
        this.router = router;
        this.deleteContact = "Delete";
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    ContactsComponent.prototype.loadData = function () {
        var _this = this;
        this._contactService.getContacts()
            .then(function (contacts) {
            _this.contacts = contacts;
        });
    };
    ContactsComponent.prototype.delete = function (contact) {
        var _this = this;
        this._contactService.delete(contact.id)
            .then(function () {
            _this.contacts = _this.contacts.filter(function (c) { return c !== contact; });
        });
    };
    ContactsComponent.prototype.gotoDetail = function (contact) {
        var link = ['/detail', contact.id];
        this.router.navigate(link);
    };
    ContactsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'selector',
            templateUrl: 'contacts.component.html',
            styleUrls: ['contacts.component.css']
        }), 
        __metadata('design:paramtypes', [contats_service_1.ContactService, router_1.Router])
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map