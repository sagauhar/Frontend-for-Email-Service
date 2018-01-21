import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Request } from './../data/request';
import { Response } from './../data/response';

const EMAIL_SERVICE_URL:string = "https://wljjoj7lx4.execute-api.ap-southeast-2.amazonaws.com/dev";

@Injectable()
export class EmailService {
    constructor(private _http:Http) {}

    /**
     * This function sends the request to the back end by passing the request object as json.
     * It returns the http response in to a Response object.
     * @param request Request object that needs to be sent.
     */
    public send(request:Request):Response {
        let headers = new Headers({"Content-Type": "application/json"});

        return this._http.post(EMAIL_SERVICE_URL + "/email/send", JSON.stringify(request), {"headers": headers})
            .map(r => r.json())
            .map(r => new Response(r.statusCode, r.body));
    }
}