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
    private resumeUrl = 'http://localhost:8080/api/resumes/';

    constructor(private http: HttpClient){
    }

    getResumes(): Observable<IResume[]> {
        return this.http.get<IResume[]>(this.resumeUrl)
            .do(data => this.httpLog(`getResumes`, data))
            .catch(this.handleError);
    }

    getResume(id: number): Observable<IResume> {
        if (id === 0) {
            return Observable.of(this.initializeResume());
        }
        return this.http.get(this.resumeUrl + id)
            .do(data => this.httpLog(`getResume(${id})`, data))
            .catch(this.handleError);
    }

    deleteResume(id: number): Observable<IResume> {
        return this.http.delete(this.resumeUrl + id)
            .do(data => this.httpLog(`deleteResume(${id})`, data))
            .catch(this.handleError);
    }

    saveResume(resume: IResume): Observable<IResume> {
        if(resume.id === 0){
            return this.createResume(resume);
        }
        return this.updateResume(resume);
    }
    
    private createResume(resume: IResume): Observable<IResume> {
        resume.id = undefined;
        return this.http.post(this.resumeUrl, resume)
            .do(data => this.httpLog('createResume', data))
            .catch(this.handleError);
    }

    private updateResume(resume: IResume): Observable<IResume> {
        return this.http.put(this.resumeUrl + resume.id, resume)
            .do(data => this.httpLog(`createResume(${resume.id})`, data))
            .catch(this.handleError);
    }

    private httpLog(title: string, data: any){
        let printObj = {
            length: data.length
        };
        printObj[title] = data;
        console.log(printObj);
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
            createdAt: null,
            description: null,
            starRating: null,
            pdfUrl: null
        };
    }
}