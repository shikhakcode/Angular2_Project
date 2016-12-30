System.register(["angular2/core", "angular2/src/http/http", 'rxjs/add/operator/map', "angular2/src/http/headers"], function(exports_1, context_1) {
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
    var core_1, http_1, headers_1;
    var HTTPTestService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (headers_1_1) {
                headers_1 = headers_1_1;
            }],
        execute: function() {
            HTTPTestService = (function () {
                function HTTPTestService(_http) {
                    this._http = _http;
                }
                HTTPTestService.prototype.getCurrenttime = function () {
                    return this._http.get('http://date.jsontest.com')
                        .map(function (res) { return res.json(); }); // observerable to interact with endpoints and get the data for application
                };
                HTTPTestService.prototype.postJson = function () {
                    var json = JSON.stringify({ var1: 'test', var2: 3 });
                    var param = 'json=' + json;
                    var header = new headers_1.Headers();
                    header.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this._http.post('http://validate.jsontest.com', param, {
                        headers: header
                    }).map(function (res) { return res.json; });
                };
                HTTPTestService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HTTPTestService);
                return HTTPTestService;
            }());
            exports_1("HTTPTestService", HTTPTestService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAtdGVzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUVJLHlCQUFvQixLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07Z0JBQUUsQ0FBQztnQkFFbEMsd0NBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUM7eUJBQzVDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQyxDQUFDLDJFQUEyRTtnQkFDNUcsQ0FBQztnQkFFRCxrQ0FBUSxHQUFSO29CQUVJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO29CQUNuRCxJQUFJLEtBQUssR0FBRyxPQUFPLEdBQUMsSUFBSSxDQUFDO29CQUN6QixJQUFJLE1BQU0sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztvQkFFM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUMsbUNBQW1DLENBQUMsQ0FBQztvQkFFbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLDhCQUE4QixFQUFDLEtBQUssRUFBRTt3QkFDekQsT0FBTyxFQUFFLE1BQU07cUJBQ2xCLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFSLENBQVEsQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQXJCTDtvQkFBQyxpQkFBVSxFQUFFOzttQ0FBQTtnQkF1QmIsc0JBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBO1lBdEJELDZDQXNCQyxDQUFBIiwiZmlsZSI6Imh0dHAtdGVzdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiYW5ndWxhcjIvc3JjL2h0dHAvaHR0cFwiO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHtIZWFkZXJzfSBmcm9tIFwiYW5ndWxhcjIvc3JjL2h0dHAvaGVhZGVyc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSFRUUFRlc3RTZXJ2aWNle1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCl7fVxuXG4gICAgZ2V0Q3VycmVudHRpbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vZGF0ZS5qc29udGVzdC5jb20nKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7IC8vIG9ic2VydmVyYWJsZSB0byBpbnRlcmFjdCB3aXRoIGVuZHBvaW50cyBhbmQgZ2V0IHRoZSBkYXRhIGZvciBhcHBsaWNhdGlvblxuICAgIH1cblxuICAgIHBvc3RKc29uKCl7XG5cbiAgICAgICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeSh7dmFyMTogJ3Rlc3QnLCB2YXIyOiAzfSk7XG4gICAgICAgIHZhciBwYXJhbSA9ICdqc29uPScranNvbjtcbiAgICAgICAgdmFyIGhlYWRlciA9IG5ldyBIZWFkZXJzKCk7XG5cbiAgICAgICAgaGVhZGVyLmFwcGVuZCgnQ29udGVudC1UeXBlJywnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL3ZhbGlkYXRlLmpzb250ZXN0LmNvbScscGFyYW0sIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclxuICAgICAgICB9KS5tYXAocmVzID0+IHJlcy5qc29uKTtcbiAgICB9XG5cbn1cbiJdfQ==
