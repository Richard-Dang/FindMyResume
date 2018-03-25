import {Component, OnInit} from "@angular/core";
import {IResume} from "../resume";
import {ResumeService} from "../resume.service";

@Component({
    templateUrl: './resume-list.component.html',
    styleUrls: ['./resume-list.component.css']
})
export class ResumeListComponent implements OnInit{
    pageTitle: string = 'Resumes';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    listFilter: string;
    errorMessage: string;
    resumes: IResume[];

    constructor(private resumeService: ResumeService) {
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.resumeService.getResumes()
            .subscribe(products => this.resumes = products,
                    error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Resume List: ' + message;
    }

}