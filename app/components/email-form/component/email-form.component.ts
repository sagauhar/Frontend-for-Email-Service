import { Component, ViewEncapsulation } from '@angular/core';
import { EmailService } from './../../../services/email.service';
import { Request } from './../../../data/request';
import { Response } from './../../../data/response';
import html from './email-form.component.html';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'email-form-component',
    template: html
})

export class EmailFormComponent {
    private request:Request = new Request();
    private message:string;
    private messageClass:string;
    private requiredEmailRegexp:RegExp = /^(([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)(\s*;\s*|\s*$))+$/;
    private optionalEmailRegexp:RegExp = /^(([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)(\s*;\s*|\s*$))*$/;

    constructor(private emailService:EmailService) {
        this.initializeRequest();
    }

    /**
     * Initializes the request object.
     */
    private initializeRequest() {
        this.request.to = "";
        this.request.cc = "";
        this.request.bcc = "";
        this.request.subject = "";
        this.request.body = "";
    }

    /**
     * This function is called by the send button on html page.
     * It sends the request object to email service and upon response, shows the message.
     */
    protected send() {
        if (this.request) {
            this.emailService.send(this.request)
                .subscribe(response => {
                    if (response) {
                        this.message = response.body;
                        if (response.statusCode >= 200 && response.statusCode < 300) {
                            this.messageClass = "alert-success";
                        } else {
                            this.messageClass = "alert-danger";
                        }
                    }
                })
        }
    }
}