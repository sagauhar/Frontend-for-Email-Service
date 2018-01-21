import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailFormComponent } from './component/email-form.component'

const DECLARATIONS = [EmailFormComponent];

@NgModule({
    declarations: DECLARATIONS,
    exports: [EmailFormComponent],
    imports: [CommonModule, FormsModule]
})

export class EmailFormComponentModule {}