import {NgModule} from '@angular/core';
import {ResumeListComponent} from "./resume-list/resume-list.component";
import {RouterModule} from "@angular/router";
import {ResumeEditGuard} from "./resume-guard/resume-guard.service";
import {ResumeService} from "./resume.service";
import {SharedModule} from './../shared/shared.module';
import {ResumeEditComponent} from './resume-edit/resume-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ResumeFilterPipe} from "./resume-filter.pipe";
import {PdfViewerModule} from "ng2-pdf-viewer";

@NgModule({
    imports: [
        ReactiveFormsModule,
        SharedModule,
        PdfViewerModule,
        RouterModule.forChild([
          {path: 'resumes', component: ResumeListComponent},
          {path: 'resumeEdit/:id',
              canDeactivate: [ResumeEditGuard],
              component: ResumeEditComponent}
        ]),
    ],
    declarations: [
        ResumeListComponent,
        ResumeEditComponent,
        ResumeFilterPipe
    ],
    providers: [
        ResumeService,
        ResumeEditGuard
    ]
})
export class ResumeModule { }
