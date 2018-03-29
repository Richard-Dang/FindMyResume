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
    showPreview: boolean = true;
    listFilter: string;
    errorMessage: string;
    resumes: IResume[];
    pdfsRendered: boolean = false;

    constructor(private resumeService: ResumeService) {
    }

    //TODO: add disable adblock message
    togglePreview(): void {
        this.showPreview = !this.showPreview;
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

    pageRendered(event: CustomEvent) {
        this.pdfsRendered = true;
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

    onRatingClicked(increment: number, id: number): void {
        let resume = this.resumes.find((resume) => {
            return resume.id === id;
        });

        let newStarRating = resume.starRating+increment;
        if(newStarRating < 0){
            resume.starRating = 0;
        } else if (newStarRating > 5){
            resume.starRating = 5;
        } else{
            resume.starRating = newStarRating;
        }
    }

    onTagClicked(tag: string): void {
        this.listFilter = tag;
    }

    clearFilter(): void {
        this.listFilter = "";
    }

}