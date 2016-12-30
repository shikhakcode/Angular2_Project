System.register(["angular2/core", "./contact.component", "./contact.service"], function(exports_1, context_1) {
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
    var core_1, contact_component_1, contact_service_1;
    var ContactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            ContactListComponent = (function () {
                function ContactListComponent(_contactService) {
                    this._contactService = _contactService;
                    this.selectedContact = null;
                }
                ;
                ContactListComponent.prototype.onSelect = function (contact) {
                    this.selectedContact = contact;
                };
                ContactListComponent.prototype.getContacts = function () {
                    var _this = this;
                    this._contactService.getContacts().then(function (contacts) { return _this.contacts = contacts; });
                };
                ContactListComponent.prototype.ngOnInit = function () {
                    this.getContacts();
                };
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: "contact-list",
                        template: "\n   <ul> \n        <li *ngFor=\"#contact of contacts\"\n            (click) = \"onSelect(contact)\"\n            [class.selected] = \"selectedContact === contact\">\n                {{contact.firstname}} {{contact.lastname}}\n        </li>\n    </ul>\n    <contact *ngIf=\"selectedContact != null\" [contact]=\"selectedContact\"></contact>\n  ",
                        directives: [contact_component_1.ContactComponent],
                        providers: [contact_service_1.ContactService],
                        styleUrls: ["../src/css/app.css"]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService])
                ], ContactListComponent);
                return ContactListComponent;
            }());
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBS0ksOEJBQW9CLGVBQStCO29CQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBRjVDLG9CQUFlLEdBQUcsSUFBSSxDQUFDO2dCQUV1QixDQUFDOztnQkFFdEQsdUNBQVEsR0FBUixVQUFTLE9BQU87b0JBQ2IsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7Z0JBQ2xDLENBQUM7Z0JBRUQsMENBQVcsR0FBWDtvQkFBQSxpQkFFQztvQkFEQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQWtCLElBQUcsT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFFLFFBQVEsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO2dCQUN6RixDQUFDO2dCQUVELHVDQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNyQixDQUFDO2dCQWxDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBQyxjQUFjO3dCQUN2QixRQUFRLEVBQUUsMFZBU1Q7d0JBQ0MsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUM7d0JBQzlCLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7d0JBQzNCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO3FCQUNwQyxDQUFDOzt3Q0FBQTtnQkFxQkYsMkJBQUM7WUFBRCxDQW5CQSxBQW1CQyxJQUFBO1lBbkJELHVEQW1CQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3RzL2NvbnRhY3QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Q29udGFjdENvbXBvbmVudH0gZnJvbSBcIi4vY29udGFjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29udGFjdFNlcnZpY2V9IGZyb20gXCIuL2NvbnRhY3Quc2VydmljZVwiO1xuaW1wb3J0IHtDb250YWN0fSBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQge09uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOlwiY29udGFjdC1saXN0XCIsXG4gIHRlbXBsYXRlOiBgXG4gICA8dWw+IFxuICAgICAgICA8bGkgKm5nRm9yPVwiI2NvbnRhY3Qgb2YgY29udGFjdHNcIlxuICAgICAgICAgICAgKGNsaWNrKSA9IFwib25TZWxlY3QoY29udGFjdClcIlxuICAgICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXSA9IFwic2VsZWN0ZWRDb250YWN0ID09PSBjb250YWN0XCI+XG4gICAgICAgICAgICAgICAge3tjb250YWN0LmZpcnN0bmFtZX19IHt7Y29udGFjdC5sYXN0bmFtZX19XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8Y29udGFjdCAqbmdJZj1cInNlbGVjdGVkQ29udGFjdCAhPSBudWxsXCIgW2NvbnRhY3RdPVwic2VsZWN0ZWRDb250YWN0XCI+PC9jb250YWN0PlxuICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtDb250YWN0Q29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtDb250YWN0U2VydmljZV0sXG4gICAgc3R5bGVVcmxzOiBbXCIuLi9zcmMvY3NzL2FwcC5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb250YWN0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICAgIHB1YmxpYyBjb250YWN0czogQ29udGFjdFtdO1xuICAgIHB1YmxpYyBzZWxlY3RlZENvbnRhY3QgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29udGFjdFNlcnZpY2U6IENvbnRhY3RTZXJ2aWNlKXt9O1xuXG4gICAgb25TZWxlY3QoY29udGFjdCl7XG4gICAgICAgdGhpcy5zZWxlY3RlZENvbnRhY3QgPSBjb250YWN0O1xuICAgIH1cblxuICAgIGdldENvbnRhY3RzKCl7XG4gICAgICB0aGlzLl9jb250YWN0U2VydmljZS5nZXRDb250YWN0cygpLnRoZW4oKGNvbnRhY3RzOkNvbnRhY3RbXSk9PnRoaXMuY29udGFjdHMgPWNvbnRhY3RzKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiBhbnl7XG4gICAgICB0aGlzLmdldENvbnRhY3RzKCk7XG4gICAgfVxuXG59Il19
