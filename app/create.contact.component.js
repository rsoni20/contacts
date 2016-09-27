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
var contact_1 = require('./contact');
var router_1 = require('@angular/router');
var CreateContactComponent = (function () {
    function CreateContactComponent(_contactService, router) {
        this._contactService = _contactService;
        this.router = router;
        this.newContact = new contact_1.Contact();
    }
    CreateContactComponent.prototype.ngOnInit = function () { };
    CreateContactComponent.prototype.add = function () {
        // this.newContact.name = this.newContact.name.trim();
        // this.newContact.phoneNo = this.newContact.phoneNo.trim();
        var _this = this;
        if (!this.newContact.name || !this.newContact.phoneNo) {
            return;
        }
        var link = ["/contacts"];
        this._contactService.create(this.newContact)
            .then(function () {
            _this.router.navigate(link);
        });
    };
    CreateContactComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '',
            templateUrl: 'create-contact.component.html',
            styleUrls: ['style.css']
        }), 
        __metadata('design:paramtypes', [contats_service_1.ContactService, router_1.Router])
    ], CreateContactComponent);
    return CreateContactComponent;
}());
exports.CreateContactComponent = CreateContactComponent;
//# sourceMappingURL=create.contact.component.js.map