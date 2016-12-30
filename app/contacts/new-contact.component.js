System.register(['angular2/core', "./contact.service", "angular2/src/router/router", "angular2/src/router/instruction", "angular2/src/common/forms/form_builder", "angular2/src/common/forms/validators"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contact_service_1, router_1, instruction_1, form_builder_1, validators_1;
    var NewContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (instruction_1_1) {
                instruction_1 = instruction_1_1;
            },
            function (form_builder_1_1) {
                form_builder_1 = form_builder_1_1;
            },
            function (validators_1_1) {
                validators_1 = validators_1_1;
            }],
        execute: function() {
            NewContactComponent = (function () {
                //newContact: Contact;
                function NewContactComponent(_contactService, _router, _routeParam, _formBuilder) {
                    this._contactService = _contactService;
                    this._router = _router;
                    this._routeParam = _routeParam;
                    this._formBuilder = _formBuilder;
                }
                NewContactComponent.prototype.onSubmit = function (value) {
                    this._contactService.insertContact(value);
                    this._router.navigate(['Contacts']);
                };
                NewContactComponent.prototype.ngOnInit = function () {
                    this.myForm = this._formBuilder.group({
                        'firstname': ['', validators_1.Validators.required],
                        'lastname': [this._routeParam.get('lastname'), validators_1.Validators.required],
                        'phone': ['', validators_1.Validators.required],
                        'email': ['', validators_1.Validators.required]
                    });
                };
                NewContactComponent = __decorate([
                    core_1.Component({
                        template: "\n       <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value)\">\n             <div>\n                <lable for=\"first-name\">First Name</lable>\n                <input type=\"text\" id=\"first-name\"\n                  [ngFormControl] = \"myForm.controls['firstname']\"\n                  #firstname=\"ngForm\">\n                  <span *ngIf = \"!firstname.valid\" >Not Valid</span>\n                  <!--<span *ngIf = \"!myForm.controls['firstname'].valid\" >Not Valid</span>-->\n             </div>\n             <div>\n                <lable for=\"last-name\">Last Name:</lable>\n                <input type=\"text\" id=\"last-name\"\n                [ngFormControl] = \"myForm.controls['lastname']\">\n             </div>\n             <div>\n                <lable for=\"phone-number\">Phone number</lable>\n                <input type=\"text\" id=\"phone-number\"\n                [ngFormControl] = \"myForm.controls['phone']\">\n             </div>\n             <div>\n                <lable for=\"email\">Email:</lable>\n                <input type=\"text\" id=\"email\"\n                [ngFormControl] = \"myForm.controls['email']\">\n             </div>\n             <button type=\"submit\" [disabled]=\"!myForm.valid\">Create Contact</button>\n      </form>       \n   ",
                        providers: [contact_service_1.ContactService],
                        styles: ["\n        .ng-invalid {\n          border: 1px solid red;\n        }\n     "],
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router, instruction_1.RouteParams, form_builder_1.FormBuilder])
                ], NewContactComponent);
                return NewContactComponent;
            }());
            exports_1("NewContactComponent", NewContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL25ldy1jb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdEQTtnQkFJSSxzQkFBc0I7Z0JBRXRCLDZCQUFvQixlQUErQixFQUFVLE9BQWUsRUFDeEQsV0FBd0IsRUFBVSxZQUF5QjtvQkFEM0Qsb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQ3hELGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUFFLENBQUM7Z0JBRWxGLHNDQUFRLEdBQVIsVUFBUyxLQUFLO29CQUNULElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7Z0JBRXhDLENBQUM7Z0JBRUQsc0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO3dCQUNsQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsdUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3RDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLHVCQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNuRSxPQUFPLEVBQUMsQ0FBQyxFQUFFLEVBQUUsdUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ2pDLE9BQU8sRUFBQyxDQUFDLEVBQUUsRUFBRSx1QkFBVSxDQUFDLFFBQVEsQ0FBQztxQkFFcEMsQ0FBQyxDQUFBO2dCQUNOLENBQUM7Z0JBN0RMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLHd4Q0EyQlQ7d0JBQ0EsU0FBUyxFQUFDLENBQUMsZ0NBQWMsQ0FBQzt3QkFDMUIsTUFBTSxFQUFDLENBQUMsNkVBSU4sQ0FBQztxQkFFTixDQUFDOzt1Q0FBQTtnQkEyQkYsMEJBQUM7WUFBRCxDQXpCQSxBQXlCQyxJQUFBO1lBekJELHFEQXlCQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3RzL25ldy1jb250YWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q29udGFjdFNlcnZpY2V9IGZyb20gXCIuL2NvbnRhY3Quc2VydmljZVwiO1xuaW1wb3J0IHtDb250YWN0fSBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcImFuZ3VsYXIyL3NyYy9yb3V0ZXIvcm91dGVyXCI7XG5pbXBvcnQge1JvdXRlUGFyYW1zfSBmcm9tIFwiYW5ndWxhcjIvc3JjL3JvdXRlci9pbnN0cnVjdGlvblwiO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvaW50ZXJmYWNlc1wiO1xuaW1wb3J0IHtGb3JtQnVpbGRlcn0gZnJvbSBcImFuZ3VsYXIyL3NyYy9jb21tb24vZm9ybXMvZm9ybV9idWlsZGVyXCI7XG5pbXBvcnQge0NvbnRyb2xHcm91cH0gZnJvbSBcImFuZ3VsYXIyL3NyYy9jb21tb24vZm9ybXMvbW9kZWxcIjtcbmltcG9ydCB7VmFsaWRhdG9yc30gZnJvbSBcImFuZ3VsYXIyL3NyYy9jb21tb24vZm9ybXMvdmFsaWRhdG9yc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZTpgXG4gICAgICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChteUZvcm0udmFsdWUpXCI+XG4gICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFibGUgZm9yPVwiZmlyc3QtbmFtZVwiPkZpcnN0IE5hbWU8L2xhYmxlPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZmlyc3QtbmFtZVwiXG4gICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF0gPSBcIm15Rm9ybS5jb250cm9sc1snZmlyc3RuYW1lJ11cIlxuICAgICAgICAgICAgICAgICAgI2ZpcnN0bmFtZT1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWYgPSBcIiFmaXJzdG5hbWUudmFsaWRcIiA+Tm90IFZhbGlkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPCEtLTxzcGFuICpuZ0lmID0gXCIhbXlGb3JtLmNvbnRyb2xzWydmaXJzdG5hbWUnXS52YWxpZFwiID5Ob3QgVmFsaWQ8L3NwYW4+LS0+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFibGUgZm9yPVwibGFzdC1uYW1lXCI+TGFzdCBOYW1lOjwvbGFibGU+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsYXN0LW5hbWVcIlxuICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXSA9IFwibXlGb3JtLmNvbnRyb2xzWydsYXN0bmFtZSddXCI+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFibGUgZm9yPVwicGhvbmUtbnVtYmVyXCI+UGhvbmUgbnVtYmVyPC9sYWJsZT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInBob25lLW51bWJlclwiXG4gICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdID0gXCJteUZvcm0uY29udHJvbHNbJ3Bob25lJ11cIj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJsZSBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFibGU+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdID0gXCJteUZvcm0uY29udHJvbHNbJ2VtYWlsJ11cIj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwiIW15Rm9ybS52YWxpZFwiPkNyZWF0ZSBDb250YWN0PC9idXR0b24+XG4gICAgICA8L2Zvcm0+ICAgICAgIFxuICAgYCxcbiAgICBwcm92aWRlcnM6W0NvbnRhY3RTZXJ2aWNlXSxcbiAgICBzdHlsZXM6W2BcbiAgICAgICAgLm5nLWludmFsaWQge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgfVxuICAgICBgXSxcblxufSlcblxuZXhwb3J0IGNsYXNzIE5ld0NvbnRhY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgICBteUZvcm06IENvbnRyb2xHcm91cDtcblxuICAgIC8vbmV3Q29udGFjdDogQ29udGFjdDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbnRhY3RTZXJ2aWNlOiBDb250YWN0U2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVQYXJhbTogUm91dGVQYXJhbXMsIHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcil7fVxuXG4gICAgb25TdWJtaXQodmFsdWUpe1xuICAgICAgICAgdGhpcy5fY29udGFjdFNlcnZpY2UuaW5zZXJ0Q29udGFjdCh2YWx1ZSk7XG4gICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydDb250YWN0cyddKVxuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogYW55IHtcbiAgICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICAnZmlyc3RuYW1lJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgICdsYXN0bmFtZSc6IFt0aGlzLl9yb3V0ZVBhcmFtLmdldCgnbGFzdG5hbWUnKSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICAncGhvbmUnOlsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICAnZW1haWwnOlsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cblxuICAgICAgICB9KVxuICAgIH1cblxufSJdfQ==
