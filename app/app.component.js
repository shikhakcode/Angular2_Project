System.register(['angular2/core', "./contacts/contact-list.component", "./contacts/new-contact.component", "angular2/router", "angular2/src/router/route_config/route_config_decorator", "./http-test.component"], function(exports_1, context_1) {
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
    var core_1, contact_list_component_1, new_contact_component_1, router_1, route_config_decorator_1, http_test_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_list_component_1_1) {
                contact_list_component_1 = contact_list_component_1_1;
            },
            function (new_contact_component_1_1) {
                new_contact_component_1 = new_contact_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (route_config_decorator_1_1) {
                route_config_decorator_1 = route_config_decorator_1_1;
            },
            function (http_test_component_1_1) {
                http_test_component_1 = http_test_component_1_1;
            }],
        execute: function() {
            //@ Component is decorator
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "  \n        <header>\n          <nav>\n            <a [routerLink]=\"['Contacts']\"> Contact</a>\n            <a [routerLink]=\"['NewContacts']\">New Contact</a>\n          </nav>\n        </header>\n        <router-outlet></router-outlet>\n        <http-test></http-test>\n    ",
                        directives: [contact_list_component_1.ContactListComponent, http_test_component_1.HTTPTestComponent, router_1.ROUTER_DIRECTIVES],
                    }),
                    route_config_decorator_1.RouteConfig([
                        { path: '/contacts', name: 'Contacts', component: contact_list_component_1.ContactListComponent, useAsDefault: true },
                        { path: '/newcontacts', name: 'NewContacts', component: new_contact_component_1.NewContactComponent },
                        { path: '/newcontacts/:lastname', name: 'NewContactsFromContact', component: new_contact_component_1.NewContactComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQSwwQkFBMEI7WUFzQjFCO2dCQUFBO2dCQUVBLENBQUM7Z0JBdkJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSx3UkFTVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyw2Q0FBb0IsRUFBRSx1Q0FBaUIsRUFBRSwwQkFBaUIsQ0FBQztxQkFDM0UsQ0FBQztvQkFFRCxvQ0FBVyxDQUFDO3dCQUNULEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBQyw2Q0FBb0IsRUFBRSxZQUFZLEVBQUMsSUFBSSxFQUFDO3dCQUN0RixFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsSUFBSSxFQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUMsMkNBQW1CLEVBQUM7d0JBQ3hFLEVBQUMsSUFBSSxFQUFDLHdCQUF3QixFQUFFLElBQUksRUFBQyx3QkFBd0IsRUFBRSxTQUFTLEVBQUMsMkNBQW1CLEVBQUM7cUJBQ2hHLENBQUM7O2dDQUFBO2dCQUlGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NvbnRhY3RMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9jb250YWN0cy9jb250YWN0LWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQge05ld0NvbnRhY3RDb21wb25lbnR9IGZyb20gXCIuL2NvbnRhY3RzL25ldy1jb250YWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZ30gZnJvbSBcImFuZ3VsYXIyL3NyYy9yb3V0ZXIvcm91dGVfY29uZmlnL3JvdXRlX2NvbmZpZ19kZWNvcmF0b3JcIjtcbmltcG9ydCB7SFRUUFRlc3RDb21wb25lbnR9IGZyb20gXCIuL2h0dHAtdGVzdC5jb21wb25lbnRcIjtcblxuXG4vL0AgQ29tcG9uZW50IGlzIGRlY29yYXRvclxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLCAvLyBUaGlzIGhhcyB0byBtYXAgaW4gaW5kZXguaHRtbFxuICAgIHRlbXBsYXRlOiBgICBcbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydDb250YWN0cyddXCI+IENvbnRhY3Q8L2E+XG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ05ld0NvbnRhY3RzJ11cIj5OZXcgQ29udGFjdDwvYT5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgPGh0dHAtdGVzdD48L2h0dHAtdGVzdD5cbiAgICBgLCAvLyBiYXB0aWNlIHVzZSB0byBjb25zaWRlciBldmVyeXRoaW5nIGluc2lkZSBpdCBhcyBhIHN0cmluZyAgXG4gICAgZGlyZWN0aXZlczogW0NvbnRhY3RMaXN0Q29tcG9uZW50LCBIVFRQVGVzdENvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdLFxufSlcblxuQFJvdXRlQ29uZmlnKFtcbiAgICB7cGF0aDonL2NvbnRhY3RzJywgbmFtZTonQ29udGFjdHMnLCBjb21wb25lbnQ6Q29udGFjdExpc3RDb21wb25lbnQsIHVzZUFzRGVmYXVsdDp0cnVlfSxcbiAgICB7cGF0aDonL25ld2NvbnRhY3RzJywgbmFtZTonTmV3Q29udGFjdHMnLCBjb21wb25lbnQ6TmV3Q29udGFjdENvbXBvbmVudH0sXG4gICAge3BhdGg6Jy9uZXdjb250YWN0cy86bGFzdG5hbWUnLCBuYW1lOidOZXdDb250YWN0c0Zyb21Db250YWN0JywgY29tcG9uZW50Ok5ld0NvbnRhY3RDb21wb25lbnR9XG5dKVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufVxuIl19
