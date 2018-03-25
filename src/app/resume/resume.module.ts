import {NgModule} from '@angular/core';
import {ResumeListComponent} from "./resume-list/resume-list.component";
import {ResumeDetailComponent} from "./resume-detail/resume-detail.component";
import {RouterModule} from "@angular/router";
import {ResumeDetailGuard, ResumeEditGuard} from "./resume-guard/resume-guard.service";
import {ResumeService} from "./resume.service";
import {SharedModule} from './../shared/shared.module';
import {ResumeEditComponent} from './resume-edit/resume-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ResumeFilterPipe} from "./resume-filter.pipe";

@NgModule({
    imports: [
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forChild([
          {path: 'resumes', component: ResumeListComponent},
          {path: 'resumes/:id',
              canActivate: [ResumeDetailGuard],
              component: ResumeDetailComponent},
          {path: 'resumeEdit/:id',
              canDeactivate: [ResumeEditGuard],
              component: ResumeEditComponent}
        ]),
    ],
    declarations: [
        ResumeListComponent,
        ResumeDetailComponent,
        ResumeEditComponent,
        ResumeFilterPipe
    ],
    providers: [
        ResumeService,
        ResumeDetailGuard,
        ResumeEditGuard
    ]
})
export class ResumeModule { }
