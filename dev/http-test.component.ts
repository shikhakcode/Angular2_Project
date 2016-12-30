import {Component} from 'angular2/core';
import {HTTPTestService} from "./http-test.service";


//@ Component is decorator
@Component({
    selector: 'http-test',
    template: `  
       <button (click)="getTestData();">Test GET Request</button><br>
       <p> Get Data: {{getData}}</p>
       <button (click)="getPostData();">Test POST Request</button><br>
       <p>Post Data: {{postData}} </p>
        
    `,
    providers:[HTTPTestService],
})

export class HTTPTestComponent {

    getData: string;
    postData: string;

    constructor(private _httpServices: HTTPTestService){}

    getTestData(){
        this._httpServices.getCurrenttime()
            .subscribe(
              data => this.getData = JSON.stringify(data),
              error => alert(error),
                () => console.log("Finished")
            );
    }

    getPostData(){
        this._httpServices.postJson()
            .subscribe(
                data => this.postData = JSON.stringify(data),
                error => alert(error),
                () => console.log("Finished")
            );
    }
}
