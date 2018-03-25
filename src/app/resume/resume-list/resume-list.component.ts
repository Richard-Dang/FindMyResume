import {Component, OnInit} from "@angular/core";
import {IResume} from "../resume";
import {ResumeService} from "../resume.service";
import * as FileSaver from "file-saver";

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
            .subscribe(resumes => {
                this.resumes = resumes;

                this.resumes.forEach((resume) => {
                    fetch("data:application/pdf;base64," + resume.file)
                        .then((resp) => {
                            return resp.blob()
                        })
                        .then((blob) => {
                            resume.pdfData = blob;
                            resume.pdfUrl = URL.createObjectURL(resume.pdfData);
                        });
                })


                }, error => this.errorMessage = <any>error);
    }

    openPdf(id: number): void {
        let resume = this.resumes.find((resume) => {
            return resume.id === id;
        });
        window.open(resume.pdfUrl);
    }

    downloadPdf(id: number): void {
        let resume = this.resumes.find((resume) => {
            return resume.id === id;
        });
        FileSaver.saveAs(resume.pdfData, `${resume.author}.pdf`);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Resume List: ' + message;
    }

    onTagClicked(tag: string): void {
        this.listFilter = tag;
    }

    clearFilter(): void {
        this.listFilter = "";
    }

}