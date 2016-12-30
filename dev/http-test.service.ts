import {Injectable} from "angular2/core";
import {Http} from "angular2/src/http/http";
import 'rxjs/add/operator/map';
import {Headers} from "angular2/src/http/headers";

@Injectable()
export class HTTPTestService{

    constructor(private _http: Http){}

    getCurrenttime(){
        return this._http.get('http://date.jsontest.com')
            .map(res => res.json()); // observerable to interact with endpoints and get the data for application
    }

    postJson(){

        var json = JSON.stringify({var1: 'test', var2: 3});
        var param = 'json='+json;
        var header = new Headers();

        header.append('Content-Type','application/x-www-form-urlencoded');

        return this._http.post('http://validate.jsontest.com',param, {
            headers: header
        }).map(res => res.json);
    }

}
