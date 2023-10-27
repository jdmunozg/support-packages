import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmissionFormRoutingModule } from './submission-form-routing.module';
import { SubmissionFormComponent } from './submission-form.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    SubmissionFormComponent
  ],
  imports: [
    CommonModule,
    SubmissionFormRoutingModule,
    ButtonModule
  ]
})
export class SubmissionFormModule { }
