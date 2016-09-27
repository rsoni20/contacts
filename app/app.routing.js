"use strict";
var router_1 = require('@angular/router');
var contacts_component_1 = require('./contacts.component');
var create_contact_component_1 = require('./create.contact.component');
var component_detail_component_1 = require('./component-detail.component');
var appRoutes = [
    { path: 'detail/:id', component: component_detail_component_1.ContactDetailComponent },
    { path: '', redirectTo: '/contacts', pathMatch: 'full' },
    { path: 'contacts', component: contacts_component_1.ContactsComponent },
    { path: 'create-contact', component: create_contact_component_1.CreateContactComponent }
];
var NameRoutingModule = (function () {
    function NameRoutingModule() {
    }
    return NameRoutingModule;
}());
exports.NameRoutingModule = NameRoutingModule;
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map