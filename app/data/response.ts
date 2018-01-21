export class Response {
    body:string;
    statusCode:number;

    constructor(statusCode: number, body:string) {
        this.statusCode = statusCode;
        this.body = body;
    }
}