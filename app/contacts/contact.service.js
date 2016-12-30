System.register(["angular2/core", "./mock-contact"], function(exports_1, context_1) {
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
    var core_1, mock_contact_1;
    var ContactService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_contact_1_1) {
                mock_contact_1 = mock_contact_1_1;
            }],
        execute: function() {
            ContactService = (function () {
                function ContactService() {
                }
                ContactService.prototype.getContacts = function () {
                    return Promise.resolve(mock_contact_1.CONTACT);
                };
                ContactService.prototype.insertContact = function (contact) {
                    Promise.resolve(mock_contact_1.CONTACT).then(function (contacts) { return contacts.push(contact); });
                };
                ContactService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ContactService);
                return ContactService;
            }());
            exports_1("ContactService", ContactService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBO2dCQVFBLENBQUM7Z0JBUEcsb0NBQVcsR0FBWDtvQkFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxzQkFBTyxDQUFDLENBQUE7Z0JBQ25DLENBQUM7Z0JBRUQsc0NBQWEsR0FBYixVQUFjLE9BQWdCO29CQUMxQixPQUFPLENBQUMsT0FBTyxDQUFDLHNCQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFtQixJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO2dCQUNuRixDQUFDO2dCQVJMO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQVNiLHFCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCwyQ0FRQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3RzL2NvbnRhY3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Q09OVEFDVH0gZnJvbSBcIi4vbW9jay1jb250YWN0XCI7XG5pbXBvcnQge0NvbnRhY3R9IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnRhY3RTZXJ2aWNle1xuICAgIGdldENvbnRhY3RzKCl7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoQ09OVEFDVClcbiAgICB9XG5cbiAgICBpbnNlcnRDb250YWN0KGNvbnRhY3Q6IENvbnRhY3Qpe1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoQ09OVEFDVCkudGhlbigoY29udGFjdHM6IENvbnRhY3RbXSkgPT4gY29udGFjdHMucHVzaChjb250YWN0KSk7XG4gICAgfVxufVxuIl19
