import {Pipe, PipeTransform} from '@angular/core';
import {IResume} from './resume';

@Pipe({
    name: 'resumeFilter'
})
export class ResumeFilterPipe implements PipeTransform {

    transform(resumes: IResume[], filterBy: string): IResume[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? resumes.filter((resume: IResume) => this.filterResumes(resume, filterBy)) : resumes;
    }

    private filterResumes(resume: IResume, filterBy: string) {
        let tagFound = false;
        resume.tags.forEach((tag) => {
            if(tag.toLocaleLowerCase().indexOf(filterBy) !== -1) {
                tagFound = true;
            }
        });

        let matchFound = resume.author.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
            resume.email.toLocaleLowerCase().indexOf(filterBy) !== -1 || tagFound;

        return matchFound;
    }
}
