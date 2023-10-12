import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/layout/layout.component';
import { ApplyForJobComponent } from './apply-for-job/apply-for-job.component';
import { ImportApplicationComponent } from './import-application/import-application.component';
import { JobFormDesignerComponent } from './job-form-designer/job-form-designer.component';
import { ReceivedApplicationComponent } from './received-application/received-application.component';
import { StatusConfigComponent } from './status-config/status-config.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
      
    children: [
      {
        path: 'apply-job',
        component: ApplyForJobComponent
      },
      {
        path: 'import-application',
        component: ImportApplicationComponent
      },
      {
        path: 'job-form-designer',
        component: JobFormDesignerComponent
      },
      {
        path: 'received-application',
        component: ReceivedApplicationComponent
      },
      {
        path: 'status-config',
        component: StatusConfigComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
