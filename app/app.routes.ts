import { EmailFormComponent } from './components/email-form/component/email-form.component';

export const appRoutes = [
    {path: '', redirectTo: '/email-form', pathMatch: 'full'},
    {path: 'email-form', component: EmailFormComponent}
]