import {Component} from 'angular2/core';
import {Router} from "angular2/src/router/router";
import {ContactService} from "./contact.service";
import {Contact} from "./contact";

@Component({
   selector:"contact",
   template:`
       <div>
         <div>
            <lable for="first-name">First Name</lable>
            <input [(ngModel)]="contact.firstname" type="text" id="first-name">
         </div>
         <div>
            <lable for="last-name">Last Name:</lable>
            <input [(ngModel)]="contact.lastname" type="text" id="last-name">
         </div>
                  <div>
            <lable for="phone-number">Phone number</lable>
            <input [(ngModel)]="contact.phone" type="text" id="phone-number">
         </div>
         <div>
            <lable for="email">Email:</lable>
            <input [(ngModel)]="contact.email" type="text" id="email">
         </div>
         <button (click)="onCreateContact()">Create contact from contact</button>
       </div>        
   `,
  inputs: ["contact"],

})

export class ContactComponent{
  public contact: Contact = null;

  constructor(private _router: Router){}

    onCreateContact(){

     this._router.navigate(['NewContacts', {lastname: this.contact.lastname}]);

  }

}