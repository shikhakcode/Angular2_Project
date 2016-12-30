System.register(['angular2/core', "./http-test.service"], function(exports_1, context_1) {
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
    var core_1, http_test_service_1;
    var HTTPTestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_test_service_1_1) {
                http_test_service_1 = http_test_service_1_1;
            }],
        execute: function() {
            //@ Component is decorator
            HTTPTestComponent = (function () {
                function HTTPTestComponent(_httpServices) {
                    this._httpServices = _httpServices;
                }
                HTTPTestComponent.prototype.getTestData = function () {
                    var _this = this;
                    this._httpServices.getCurrenttime()
                        .subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
                };
                HTTPTestComponent.prototype.getPostData = function () {
                    var _this = this;
                    this._httpServices.postJson()
                        .subscribe(function (data) { return _this.postData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
                };
                HTTPTestComponent = __decorate([
                    core_1.Component({
                        selector: 'http-test',
                        template: "  \n       <button (click)=\"getTestData();\">Test GET Request</button><br>\n       <p> Get Data: {{getData}}</p>\n       <button (click)=\"getPostData();\">Test POST Request</button><br>\n       <p>Post Data: {{postData}} </p>\n        \n    ",
                        providers: [http_test_service_1.HTTPTestService],
                    }), 
                    __metadata('design:paramtypes', [http_test_service_1.HTTPTestService])
                ], HTTPTestComponent);
                return HTTPTestComponent;
            }());
            exports_1("HTTPTestComponent", HTTPTestComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAtdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQSwwQkFBMEI7WUFhMUI7Z0JBS0ksMkJBQW9CLGFBQThCO29CQUE5QixrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7Z0JBQUUsQ0FBQztnQkFFckQsdUNBQVcsR0FBWDtvQkFBQSxpQkFPQztvQkFORyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRTt5QkFDOUIsU0FBUyxDQUNSLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFuQyxDQUFtQyxFQUMzQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBWixDQUFZLEVBQ25CLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUNWLENBQUM7Z0JBRUQsdUNBQVcsR0FBWDtvQkFBQSxpQkFPQztvQkFORyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTt5QkFDeEIsU0FBUyxDQUNOLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFwQyxDQUFvQyxFQUM1QyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBWixDQUFZLEVBQ3JCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUNWLENBQUM7Z0JBbkNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSxxUEFNVDt3QkFDRCxTQUFTLEVBQUMsQ0FBQyxtQ0FBZSxDQUFDO3FCQUM5QixDQUFDOztxQ0FBQTtnQkEwQkYsd0JBQUM7WUFBRCxDQXhCQSxBQXdCQyxJQUFBO1lBeEJELGlEQXdCQyxDQUFBIiwiZmlsZSI6Imh0dHAtdGVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0hUVFBUZXN0U2VydmljZX0gZnJvbSBcIi4vaHR0cC10ZXN0LnNlcnZpY2VcIjtcblxuXG4vL0AgQ29tcG9uZW50IGlzIGRlY29yYXRvclxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdodHRwLXRlc3QnLFxuICAgIHRlbXBsYXRlOiBgICBcbiAgICAgICA8YnV0dG9uIChjbGljayk9XCJnZXRUZXN0RGF0YSgpO1wiPlRlc3QgR0VUIFJlcXVlc3Q8L2J1dHRvbj48YnI+XG4gICAgICAgPHA+IEdldCBEYXRhOiB7e2dldERhdGF9fTwvcD5cbiAgICAgICA8YnV0dG9uIChjbGljayk9XCJnZXRQb3N0RGF0YSgpO1wiPlRlc3QgUE9TVCBSZXF1ZXN0PC9idXR0b24+PGJyPlxuICAgICAgIDxwPlBvc3QgRGF0YToge3twb3N0RGF0YX19IDwvcD5cbiAgICAgICAgXG4gICAgYCxcbiAgICBwcm92aWRlcnM6W0hUVFBUZXN0U2VydmljZV0sXG59KVxuXG5leHBvcnQgY2xhc3MgSFRUUFRlc3RDb21wb25lbnQge1xuXG4gICAgZ2V0RGF0YTogc3RyaW5nO1xuICAgIHBvc3REYXRhOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZXM6IEhUVFBUZXN0U2VydmljZSl7fVxuXG4gICAgZ2V0VGVzdERhdGEoKXtcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2VzLmdldEN1cnJlbnR0aW1lKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5nZXREYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIkZpbmlzaGVkXCIpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGdldFBvc3REYXRhKCl7XG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlcy5wb3N0SnNvbigpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wb3N0RGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIkZpbmlzaGVkXCIpXG4gICAgICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==
