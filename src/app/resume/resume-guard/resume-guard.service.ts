import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router} from "@angular/router";
import {ResumeEditComponent} from "../resume-edit/resume-edit.component";

@Injectable()
export class ResumeDetailGuard implements CanActivate {

    constructor(private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id =+route.url[1].path;
        if (isNaN(id) || id < 1){
            alert("Invalid resume Id");
            this._router.navigate(['/resumes']);
            return false;
        }
        return true;
    }
}

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
