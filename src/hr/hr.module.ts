import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { StatusConfigComponent } from './status-config/status-config.component';
import { JobFormDesignerComponent } from './job-form-designer/job-form-designer.component';
import { ApplyForJobComponent } from './apply-for-job/apply-for-job.component';
import { ReceivedApplicationComponent } from './received-application/received-application.component';
import { ImportApplicationComponent } from './import-application/import-application.component';


@NgModule({
  declarations: [
    StatusConfigComponent,
    JobFormDesignerComponent,
    ApplyForJobComponent,
    ReceivedApplicationComponent,
    ImportApplicationComponent
  ],
  imports: [
    CommonModule,
    HrRoutingModule,
    
  ]
})
export class HrModule { }
