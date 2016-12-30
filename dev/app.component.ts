import {Component} from 'angular2/core';
import {ContactListComponent} from "./contacts/contact-list.component";
import {NewContactComponent} from "./contacts/new-contact.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/src/router/route_config/route_config_decorator";
import {HTTPTestComponent} from "./http-test.component";


//@ Component is decorator
@Component({
    selector: 'my-app', // This has to map in index.html
    template: `  
        <header>
          <nav>
            <a [routerLink]="['Contacts']"> Contact</a>
            <a [routerLink]="['NewContacts']">New Contact</a>
          </nav>
        </header>
        <router-outlet></router-outlet>
        <http-test></http-test>
    `, // baptice use to consider everything inside it as a string  
    directives: [ContactListComponent, HTTPTestComponent, ROUTER_DIRECTIVES],
})

@RouteConfig([
    {path:'/contacts', name:'Contacts', component:ContactListComponent, useAsDefault:true},
    {path:'/newcontacts', name:'NewContacts', component:NewContactComponent},
    {path:'/newcontacts/:lastname', name:'NewContactsFromContact', component:NewContactComponent}
])

export class AppComponent {

}
