import {Injectable} from "@angular/core";
import {IResume} from "./resume";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import 'rxjs/add/observable/of';


@Injectable()
export class ResumeService {
    private resumeUrl = './api/resumes/resumes.json';


    constructor(private _http: HttpClient){
    }

    getResumes(): Observable<IResume[]> {
        return this._http.get<IResume[]>(this.resumeUrl)
            .do(data => console.log(`Resume length: ${data.length}\nResumes: ${JSON.stringify(data)}`))
            .catch(this.handleError);
    }

    getResume(id: number): Observable<IResume> {
        if (id === 0) {
            return Observable.of(this.initializeResume());
        }
        return this.getResumes()
            .map((resumes: IResume[]) =>
                resumes.find((resume: IResume) =>
                    resume.id === id));
    }

    private handleError(err: HttpErrorResponse){
        console.log(err);
        return Observable.throw(err.message);
    }

    initializeResume(): IResume {
        // Return an initialized object
        return {
            id: 0,
            author: null,
            email: null,
            tags: [''],
            dateAdded: null,
            description: null,
            starRating: null,
            pdfUrl: null
        };
    }
}