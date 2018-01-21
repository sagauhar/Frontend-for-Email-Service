import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { EmailFormComponentModule } from './components/email-form/email-form-component.module';
import { EmailService } from './services/email.service';

@NgModule({
    imports: [EmailFormComponentModule, BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes, {useHash: true})],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [EmailService]
})
export class AppModule {}