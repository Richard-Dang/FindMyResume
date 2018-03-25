import {Component, OnDestroy, OnInit} from '@angular/core';
import {IResume} from "../resume";
import {ActivatedRoute, Router} from "@angular/router";
import {ResumeService} from "../resume.service";
import {Subscription} from "rxjs/Subscription";

@Component({
    templateUrl: './resume-detail.component.html'
})
export class ResumeDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product Detail';
    product: IResume;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ResumeService) {
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe()
    }

    onBack(): void {
        this._router.navigate(['/resumes']);
    }

    getProduct(id: number) {
        this._productService.getResume(id)
          .subscribe(product => this.product = product,
              error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }

}
