System.register(['angular2/core', "angular2/src/router/router"], function(exports_1, context_1) {
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
    var core_1, router_1;
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent(_router) {
                    this._router = _router;
                    this.contact = null;
                }
                ContactComponent.prototype.onCreateContact = function () {
                    this._router.navigate(['NewContacts', { lastname: this.contact.lastname }]);
                };
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: "contact",
                        template: "\n       <div>\n         <div>\n            <lable for=\"first-name\">First Name</lable>\n            <input [(ngModel)]=\"contact.firstname\" type=\"text\" id=\"first-name\">\n         </div>\n         <div>\n            <lable for=\"last-name\">Last Name:</lable>\n            <input [(ngModel)]=\"contact.lastname\" type=\"text\" id=\"last-name\">\n         </div>\n                  <div>\n            <lable for=\"phone-number\">Phone number</lable>\n            <input [(ngModel)]=\"contact.phone\" type=\"text\" id=\"phone-number\">\n         </div>\n         <div>\n            <lable for=\"email\">Email:</lable>\n            <input [(ngModel)]=\"contact.email\" type=\"text\" id=\"email\">\n         </div>\n         <button (click)=\"onCreateContact()\">Create contact from contact</button>\n       </div>        \n   ",
                        inputs: ["contact"],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0NBO2dCQUdFLDBCQUFvQixPQUFlO29CQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBRjVCLFlBQU8sR0FBWSxJQUFJLENBQUM7Z0JBRU0sQ0FBQztnQkFFcEMsMENBQWUsR0FBZjtvQkFFQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFFN0UsQ0FBQztnQkFwQ0g7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUixRQUFRLEVBQUMsU0FBUzt3QkFDbEIsUUFBUSxFQUFDLCt6QkFvQlI7d0JBQ0YsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO3FCQUVwQixDQUFDOztvQ0FBQTtnQkFhRix1QkFBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBWEQsK0NBV0MsQ0FBQSIsImZpbGUiOiJjb250YWN0cy9jb250YWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiYW5ndWxhcjIvc3JjL3JvdXRlci9yb3V0ZXJcIjtcbmltcG9ydCB7Q29udGFjdFNlcnZpY2V9IGZyb20gXCIuL2NvbnRhY3Quc2VydmljZVwiO1xuaW1wb3J0IHtDb250YWN0fSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6XCJjb250YWN0XCIsXG4gICB0ZW1wbGF0ZTpgXG4gICAgICAgPGRpdj5cbiAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFibGUgZm9yPVwiZmlyc3QtbmFtZVwiPkZpcnN0IE5hbWU8L2xhYmxlPlxuICAgICAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwiY29udGFjdC5maXJzdG5hbWVcIiB0eXBlPVwidGV4dFwiIGlkPVwiZmlyc3QtbmFtZVwiPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmxlIGZvcj1cImxhc3QtbmFtZVwiPkxhc3QgTmFtZTo8L2xhYmxlPlxuICAgICAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwiY29udGFjdC5sYXN0bmFtZVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsYXN0LW5hbWVcIj5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJsZSBmb3I9XCJwaG9uZS1udW1iZXJcIj5QaG9uZSBudW1iZXI8L2xhYmxlPlxuICAgICAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwiY29udGFjdC5waG9uZVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwaG9uZS1udW1iZXJcIj5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJsZSBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFibGU+XG4gICAgICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJjb250YWN0LmVtYWlsXCIgdHlwZT1cInRleHRcIiBpZD1cImVtYWlsXCI+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uQ3JlYXRlQ29udGFjdCgpXCI+Q3JlYXRlIGNvbnRhY3QgZnJvbSBjb250YWN0PC9idXR0b24+XG4gICAgICAgPC9kaXY+ICAgICAgICBcbiAgIGAsXG4gIGlucHV0czogW1wiY29udGFjdFwiXSxcblxufSlcblxuZXhwb3J0IGNsYXNzIENvbnRhY3RDb21wb25lbnR7XG4gIHB1YmxpYyBjb250YWN0OiBDb250YWN0ID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcil7fVxuXG4gICAgb25DcmVhdGVDb250YWN0KCl7XG5cbiAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnTmV3Q29udGFjdHMnLCB7bGFzdG5hbWU6IHRoaXMuY29udGFjdC5sYXN0bmFtZX1dKTtcblxuICB9XG5cbn0iXX0=
