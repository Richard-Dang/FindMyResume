import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChildren} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators} from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import {Observable} from 'rxjs/Observable';
import {Subscription} from "rxjs/Subscription";
import {GenericValidator} from "../../shared/generic-validator";
import {NumberValidator} from "../../shared/number-validator";
import {ActivatedRoute, Router} from "@angular/router";
import {ResumeService} from "../resume.service";
import {IResume} from "../resume";


@Component({
  templateUrl: './resume-edit.component.html',
  styleUrls: ['./resume-edit.component.css']
})
export class ResumeEditComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

    pageTitle: string = 'Resume Edit';
    errorMessage: string;
    resumeForm: FormGroup;
    formData: FormData = new FormData();


    resume: IResume;
    private sub: Subscription;

    displayMessage: { [key: string]: string} = {};
    private validationMessages: { [key: string]: { [key: string]: string } };
    private genericValidator: GenericValidator;

    get tags(): FormArray {
        return <FormArray>this.resumeForm.get('tags')
    }

    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private resumeService: ResumeService) {

        //TODO: add validation for email format
        this.validationMessages = {
            author: {
                required: 'Resume name is required.',
                minlength: 'Resume name must be at least three characters.',
                maxlength: 'Resume name cannot exceed 50 characters.'
            },
            email: {
                required: 'Email is required.'
            },
            starRating: {
                range: 'Rate the resume between 1 (lowest) and 5 (highest).'
            }
        };

        this.genericValidator = new GenericValidator(this.validationMessages)
    }

    ngOnInit() {
        this.resumeForm = this.fb.group({
          author: ['', [Validators.required,
                          Validators.minLength(3),
                          Validators.maxLength(50)]],
          email: ['', Validators.required],
          starRating: ['', NumberValidator.range(1,5)],
          tags: this.fb.array([]),
          description: ''
        });

        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getResume(id);
            }
        )
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    ngAfterViewInit(): void {
        // Watch for the blur event from any input element on the form.
        let controlBlurs: Observable<any>[] = this.formInputElements
            .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));

        // Merge the blur event observable with the valueChanges observable
        Observable.merge(this.resumeForm.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
            this.displayMessage = this.genericValidator.processMessages(this.resumeForm);
        });
    }

    addTag(): void {
        this.tags.push(new FormControl());
    }

    deleteTag(index: number): void {
        this.tags.removeAt(index);
        // The line below is required in Angular 4 to fix a bug with `removeAt` that was fixed in Angular 5.
        this.resumeForm.setControl('tags', this.fb.array(this.tags.value || []));
    }

    getResume(id: number): void {
        this.resumeService.getResume(id)
            .subscribe(
                (resume: IResume) => this.onResumeRetrieved(resume),
                (error: any) => this.errorMessage = <any>error
            );
    }

    onResumeRetrieved(resume: IResume): void {
        if(this.resumeForm){
            this.resumeForm.reset();
        }
        this.resume = resume;

        if(this.resume.id === 0){
            this.pageTitle = 'Add Resume';
        } else {
            this.pageTitle= `Edit Resume: ${this.resume.author}`;
        }

        // Update the data on the form
        this.resumeForm.patchValue({
            author: this.resume.author,
            email: this.resume.email,
            starRating: this.resume.starRating,
            description: this.resume.description
        });
        this.resumeForm.setControl('tags', this.fb.array(this.resume.tags || []));
    }

    deleteResume(): void {
        if (this.resume.id === 0) {
            this.onSaveComplete();
        } else {
            if (confirm(`Are you sure you want to delete resume by ${this.resume.author}?`)){
                this.resumeService.deleteResume(this.resume.id)
                    .subscribe(
                        () => this.onSaveComplete(),
                        (error: any) => this.errorMessage = <any>error
                    );
            }
        }
    }

    saveResume():void {
        if(this.resumeForm.dirty && this.resumeForm.valid){
            let resumeObj = Object.assign({}, this.resume, this.resumeForm.value);
            this.resumeService.saveResume(resumeObj, this.formData)
                .subscribe(
                    () => this.onSaveComplete(),
                    (error: any) => this.errorMessage = <any> error
                )
        } else if (!this.resumeForm.dirty) {
            this.onSaveComplete();
        }
    }

    onSaveComplete(): void {
        this.resumeForm.reset();
        this.router.navigate(['/resumes']);
    }

    //TODO: error trap missing resume
    attachResume(event) {
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            this.formData.append('uploadFile', file, file.name);
        }
    }

}
