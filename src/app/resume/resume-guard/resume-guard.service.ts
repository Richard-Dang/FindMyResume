import {Injectable} from '@angular/core';
import {CanDeactivate} from "@angular/router";
import {ResumeEditComponent} from "../resume-edit/resume-edit.component";

@Injectable()
export class ResumeEditGuard implements CanDeactivate<ResumeEditComponent> {

    canDeactivate(component: ResumeEditComponent): boolean {
        if(component.resumeForm.dirty) {
            let resumeName = component.resumeForm.get('author').value || 'New Resume';
            return confirm(`Navigate away and lose all changes to ${resumeName}?`)
        }
        return true;
    }
}
