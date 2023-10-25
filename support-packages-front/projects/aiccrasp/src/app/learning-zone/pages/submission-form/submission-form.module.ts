import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmissionFormRoutingModule } from './submission-form-routing.module';
import { SubmissionFormComponent } from './submission-form.component';


@NgModule({
  declarations: [
    SubmissionFormComponent
  ],
  imports: [
    CommonModule,
    SubmissionFormRoutingModule
  ]
})
export class SubmissionFormModule { }
