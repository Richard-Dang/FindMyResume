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
    private resumeUrl = '/api/resumes/';

    constructor(private http: HttpClient){
    }

    getResumes(): Observable<IResume[]> {
        return this.http.get(this.resumeUrl)
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
        return this.http.delete(this.resumeUrl + id, { responseType: 'text' })
            .do(data => this.httpLog(`deleteResume(${id})`, data))
            .catch(this.handleError);
    }

    saveResume(resume: IResume, formData: FormData): Observable<IResume> {
        if(resume.id === 0){
            return this.createResume(resume, formData);
        }
        //TODO: update to post formData
        return this.updateResume(resume);
    }
    
    private createResume(resume: IResume, formData: FormData): Observable<IResume> {
        resume.id = undefined;
        formData.append('resume', new Blob([JSON.stringify(resume)],
            {
                type: "application/json"
            }));
        return this.http.post(this.resumeUrl, formData)
            .do(data => this.httpLog('createResume', data))
            .catch(this.handleError);
    }

    private updateResume(resume: IResume): Observable<IResume> {
        return this.http.put(this.resumeUrl + resume.id, resume)
            .do(data => this.httpLog(`createResume(${resume.id})`, data))
            .catch(this.handleError);
    }

    private httpLog(title: string, data: any){
        if(data){
            let logObj = {};
            logObj[title] = data;
            console.log(logObj);
        }
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
            file: null,
            pdfData: null,
            pdfUrl: null
        };
    }
}