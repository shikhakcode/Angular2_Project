import {Component} from 'angular2/core';
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Router} from "angular2/src/router/router";
import {RouteParams} from "angular2/src/router/instruction";
import {OnInit} from "angular2/src/core/linker/interfaces";
import {FormBuilder} from "angular2/src/common/forms/form_builder";
import {ControlGroup} from "angular2/src/common/forms/model";
import {Validators} from "angular2/src/common/forms/validators";

@Component({
    template:`
       <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)">
             <div>
                <lable for="first-name">First Name</lable>
                <input type="text" id="first-name"
                  [ngFormControl] = "myForm.controls['firstname']"
                  #firstname="ngForm">
                  <span *ngIf = "!firstname.valid" >Not Valid</span>
                  <!--<span *ngIf = "!myForm.controls['firstname'].valid" >Not Valid</span>-->
             </div>
             <div>
                <lable for="last-name">Last Name:</lable>
                <input type="text" id="last-name"
                [ngFormControl] = "myForm.controls['lastname']">
             </div>
             <div>
                <lable for="phone-number">Phone number</lable>
                <input type="text" id="phone-number"
                [ngFormControl] = "myForm.controls['phone']">
             </div>
             <div>
                <lable for="email">Email:</lable>
                <input type="text" id="email"
                [ngFormControl] = "myForm.controls['email']">
             </div>
             <button type="submit" [disabled]="!myForm.valid">Create Contact</button>
      </form>       
   `,
    providers:[ContactService],
    styles:[`
        .ng-invalid {
          border: 1px solid red;
        }
     `],

})

export class NewContactComponent implements OnInit{

    myForm: ControlGroup;

    //newContact: Contact;

    constructor(private _contactService: ContactService, private _router: Router,
                private _routeParam: RouteParams, private _formBuilder: FormBuilder){}

    onSubmit(value){
         this._contactService.insertContact(value);
         this._router.navigate(['Contacts'])

    }

    ngOnInit(): any {
        this.myForm = this._formBuilder.group({
            'firstname': ['', Validators.required],
            'lastname': [this._routeParam.get('lastname'), Validators.required],
            'phone':['', Validators.required],
            'email':['', Validators.required]

        })
    }

}