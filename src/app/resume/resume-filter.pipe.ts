import {Pipe, PipeTransform} from '@angular/core';
import {IResume} from './resume';

@Pipe({
    name: 'resumeFilter'
})
export class ResumeFilterPipe implements PipeTransform {

    transform(value: IResume[], filterBy: string): IResume[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((resume: IResume) =>
            resume.author.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
