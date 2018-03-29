webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <nav class=\"navbar navbar-inverse\">\n        <div class=\"container-fluid\">\n            <a class=\"navbar-brand\">\n                <img alt=\"brand\" style=\"height:100%;display:inline-block\" src=\"assets/images/favicon.png\">\n                {{pageTitle}}</a>\n            <ul class=\"nav navbar-nav\">\n                <li><a [routerLink]=\"['/welcome']\">Home</a></li>\n                <li><a [routerLink]=\"['/resumes']\">Resume Library</a></li>\n            </ul>\n        </div>\n    </nav>\n    <div class=\"container\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'Find My Resume';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_welcome_component__ = __webpack_require__("../../../../../src/app/home/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resume_resume_module__ = __webpack_require__("../../../../../src/app/resume/resume.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__home_welcome_component__["a" /* WelcomeComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot([
                { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_4__home_welcome_component__["a" /* WelcomeComponent */] },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ]),
            __WEBPACK_IMPORTED_MODULE_6__resume_resume_module__["a" /* ResumeModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n        {{pageTitle}}\n    </div>\n\n    <div class=\"panel-body\"  >\n        <div class=\"row\" >\n            <img src=\"./assets/images/logo.png\"\n                 class=\"img-responsive center-block\"\n                 style=\"max-height:300px;padding: 30px\"/>\n        </div>\n        <div class=\"row\">\n            <div class=\"text-center\">Developed by:</div>\n            <h3 class=\"text-center\">Richard Dang</h3>\n            <div class=\"text-center\">\n                <a href=\"http://richarddang.com\" target=\"_blank\">www.richarddang.com</a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
        this.pageTitle = 'Find My Resume';
    }
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        template: __webpack_require__("../../../../../src/app/home/welcome.component.html")
    })
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "../../../../../src/app/resume/resume-detail/resume-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" *ngIf=\"resume\">\n    <div class=\"panel-heading\">\n        {{pageTitle + ': ' + resume.author}}\n    </div>\n\n    <div class=\"panel-body\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"row\">\n                    <div class=\"col-md-3\">Name:</div>\n                    <div class=\"col-md-6\">{{resume.author}}</div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-3\">Code:</div>\n                    <div class=\"col-md-6\">{{resume.email | convertToSpaces:'-'}}</div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-3\">Description:</div>\n                    <div class=\"col-md-6\">{{resume.description}}</div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-3\">Availability:</div>\n                    <div class=\"col-md-6\">{{resume.createdAt}}</div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-3\">Price:</div>\n                    <div class=\"col-md-6\">{{resume.price | currency:'USD':true}}</div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-3\">5 Star Rating:</div>\n                    <div class=\"col-md-6\">\n                        <app-star [rating]=\"resume.starRating\"\n                        (ratingClicked)=\"onRatingClicked($event)\"></app-star>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-3\">Tags:</div>\n                    <div class=\"col-md-6\">{{resume.tags}}</div>\n                </div>\n            </div>\n            <div class=\"col-md-6\" *ngIf=\"resume.file\">\n                <img class=\"center-block img-responsive\"\n                     [style.width.px]=\"150\"\n                     [style.margin.px]=\"2\"\n                     [src]=\"resume.file\"\n                     [title]=\"resume.author\">\n            </div>\n        </div>\n        <div class='has-error' *ngIf='errorMessage'>{{errorMessage}}</div>\n    </div>\n\n    <div class=\"panel-footer\">\n        <a class=\"btn btn-default\" (click)=\"onBack()\" style=\"width:80px\">\n            <i class=\"glyphicon glyphicon-chevron-left\"></i> Back\n        </a>\n        <a class=\"btn btn-primary\" style=\"width:80px;margin-left:10px\"\n           [routerLink]=\"['/resumeEdit', resume.id]\">\n            Edit\n        </a>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/resume/resume-detail/resume-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_service__ = __webpack_require__("../../../../../src/app/resume/resume.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResumeDetailComponent = (function () {
    function ResumeDetailComponent(_route, _router, _productService) {
        this._route = _route;
        this._router = _router;
        this._productService = _productService;
        this.pageTitle = 'Product Detail';
    }
    ResumeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getProduct(id);
        });
    };
    ResumeDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ResumeDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/resumes']);
    };
    ResumeDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        this._productService.getResume(id)
            .subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
    };
    ResumeDetailComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product Detail: ' + message;
    };
    return ResumeDetailComponent;
}());
ResumeDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        template: __webpack_require__("../../../../../src/app/resume/resume-detail/resume-detail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === "function" && _c || Object])
], ResumeDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=resume-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/resume/resume-edit/resume-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resume/resume-edit/resume-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n        {{pageTitle}}\n    </div>\n\n    <div class=\"panel-body\">\n        <form class=\"form-horizontal\"\n              novalidate\n              (ngSubmit)=\"saveResume()\"\n              [formGroup]=\"resumeForm\" >\n            <fieldset>\n                <div class=\"form-group\" \n                     [ngClass]=\"{'has-error': displayMessage.author }\">\n                    <label class=\"col-md-2 control-label\" for=\"authorId\">Author</label>\n\n                    <div class=\"col-md-8\">\n                        <input class=\"form-control\" \n                                id=\"authorId\" \n                                type=\"text\" \n                                placeholder=\"Name (required)\" \n                                formControlName=\"author\" />\n                        <span class=\"help-block\" *ngIf=\"displayMessage.author\">\n                                {{displayMessage.author}}\n                        </span>\n                    </div>\n                </div>\n                \n                <div class=\"form-group\" \n                     [ngClass]=\"{'has-error': displayMessage.email}\">\n                    <label class=\"col-md-2 control-label\" for=\"emailId\">Email</label>\n\n                    <div class=\"col-md-8\">\n                        <input class=\"form-control\" \n                                id=\"emailId\" \n                                type=\"email\"\n                                email\n                                placeholder=\"Email (required)\"\n                                formControlName=\"email\" />\n                        <span class=\"help-block\" *ngIf=\"displayMessage.email\">\n                                {{displayMessage.email}}\n                        </span>\n                    </div>\n                </div>\n                \n                <div class=\"form-group\" [ngClass]=\"{'has-error': displayMessage.starRating}\">\n                    <label class=\"col-md-2 control-label\" for=\"starRatingId\">Star Rating (1-5)</label>\n\n                    <div class=\"col-md-8\">\n                        <input class=\"form-control\" \n                                id=\"starRatingId\" \n                                type=\"text\" \n                                placeholder=\"Rating\" \n                                formControlName=\"starRating\" />\n                        <span class=\"help-block\" *ngIf=\"displayMessage.starRating\">\n                                {{displayMessage.starRating}}\n                        </span>\n                    </div>\n                </div>\n\n                <div class=\"form-group\" [ngClass]=\"{'has-error': displayMessage.description}\">\n                    <label class=\"col-md-2 control-label\" for=\"descriptionId\">Description</label>\n\n                    <div class=\"col-md-8\">\n                        <textarea class=\"form-control\" \n                                id=\"descriptionId\" \n                                placeholder=\"Description\"\n                                rows=3\n                                formControlName=\"description\"></textarea>\n                        <span class=\"help-block\" *ngIf=\"displayMessage.description\">\n                                {{ displayMessage.description}}\n                        </span>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">Upload Resume</label>\n                    <div class=\"col-md-8\">\n                        <input type=\"file\"\n                               (change)=\"attachResume($event)\"\n                               placeholder=\"Upload file\"\n                               accept=\".pdf,.doc,.docx\">\n                        <input type=\"hidden\"\n                               name=\"fileHidden\"\n                               formControlName=\"pdfInput\"/>\n                    </div>\n                </div>\n\n                <div formArrayName=\"tags\">\n                    <div class=\"row\">\n                        <button class=\"col-md-offset-1 col-md-1 btn btn-default\"\n                                type=\"button\"\n                                (click)=\"addTag()\">Add Tag\n                        </button>\n                    </div>\n                    <div class=\"form-group\"\n                         *ngFor=\"let tag of tags.controls; let i=index\" >\n                        <label class=\"col-md-2 control-label\" [attr.for]=\"i\">Tag</label>\n\n                        <div class=\"col-md-8\">\n                            <input class=\"form-control\"\n                                   [id]=\"i\"\n                                   type=\"text\"\n                                   placeholder=\"Tag\"\n                                   [formControlName]=\"i\" />\n                        </div>\n                        <button class=\"btn btn-warning\"\n                                type=\"button\"\n                                (click)=\"deleteTag(i)\">Delete Tag\n                        </button>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"col-md-4 col-md-offset-2\">\n                        <span>\n                            <button class=\"btn btn-primary\"\n                                    type=\"submit\"\n                                    style=\"width:80px;margin-right:10px\"\n                                    [disabled]=\"!resumeForm.valid\">\n                                Save\n                            </button>\n                        </span>\n                        <span>\n                            <a class=\"btn btn-default\"\n                               style=\"width:80px\"\n                               [routerLink]=\"['/resumes']\">\n                                Cancel\n                            </a>\n                        </span>\n                        <span>\n                            <a class=\"btn btn-default\"\n                               style=\"width:80px\"\n                               (click)=\"deleteResume()\">\n                                Delete\n                            </a>\n                        </span>       \n                     </div>\n                </div>\n            </fieldset>\n        </form>\n        <div class='has-error' *ngIf='errorMessage'>{{errorMessage}}</div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/resume/resume-edit/resume-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_generic_validator__ = __webpack_require__("../../../../../src/app/shared/generic-validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_number_validator__ = __webpack_require__("../../../../../src/app/shared/number-validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resume_service__ = __webpack_require__("../../../../../src/app/resume/resume.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ResumeEditComponent = (function () {
    function ResumeEditComponent(fb, route, router, resumeService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.resumeService = resumeService;
        this.pageTitle = 'Resume Edit';
        this.formData = new FormData();
        this.displayMessage = {};
        //TODO: add validation for email format
        this.validationMessages = {
            author: {
                required: 'Resume name is required.',
                minlength: 'Resume name must be at least three characters.',
                maxlength: 'Resume name cannot exceed 50 characters.'
            },
            email: {
                required: 'Email address is required.',
                pattern: 'Valid email address is required.'
            },
            starRating: {
                range: 'Rate the resume between 1 (lowest) and 5 (highest).'
            },
            pdfInput: {
                required: "Resume upload required."
            }
        };
        this.genericValidator = new __WEBPACK_IMPORTED_MODULE_6__shared_generic_validator__["a" /* GenericValidator */](this.validationMessages);
    }
    Object.defineProperty(ResumeEditComponent.prototype, "tags", {
        get: function () {
            return this.resumeForm.get('tags');
        },
        enumerable: true,
        configurable: true
    });
    ResumeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resumeForm = this.fb.group({
            author: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].maxLength(50)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+")]],
            starRating: ['', __WEBPACK_IMPORTED_MODULE_7__shared_number_validator__["a" /* NumberValidator */].range(1, 5)],
            tags: this.fb.array([]),
            description: '',
            pdfInput: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required]
        });
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getResume(id);
        });
    };
    ResumeEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ResumeEditComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Watch for the blur event from any input element on the form.
        var controlBlurs = this.formInputElements
            .map(function (formControl) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].fromEvent(formControl.nativeElement, 'blur'); });
        // Merge the blur event observable with the valueChanges observable
        __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"], [this.resumeForm.valueChanges].concat(controlBlurs)).debounceTime(800).subscribe(function (value) {
            _this.displayMessage = _this.genericValidator.processMessages(_this.resumeForm);
        });
    };
    ResumeEditComponent.prototype.addTag = function () {
        this.tags.push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]());
    };
    ResumeEditComponent.prototype.deleteTag = function (index) {
        this.tags.removeAt(index);
        // The line below is required in Angular 4 to fix a bug with `removeAt` that was fixed in Angular 5.
        this.resumeForm.setControl('tags', this.fb.array(this.tags.value || []));
    };
    ResumeEditComponent.prototype.getResume = function (id) {
        var _this = this;
        this.resumeService.getResume(id)
            .subscribe(function (resume) { return _this.onResumeRetrieved(resume); }, function (error) { return _this.errorMessage = error; });
    };
    ResumeEditComponent.prototype.onResumeRetrieved = function (resume) {
        if (this.resumeForm) {
            this.resumeForm.reset();
        }
        this.resume = resume;
        if (this.resume.id === 0) {
            this.pageTitle = 'Add Resume';
        }
        else {
            this.pageTitle = "Edit Resume: " + this.resume.author;
        }
        // Update the data on the form
        this.resumeForm.patchValue({
            author: this.resume.author,
            email: this.resume.email,
            starRating: this.resume.starRating,
            description: this.resume.description
        });
        this.resumeForm.setControl('tags', this.fb.array(this.resume.tags || []));
    };
    ResumeEditComponent.prototype.deleteResume = function () {
        var _this = this;
        if (this.resume.id === 0) {
            this.onSaveComplete();
        }
        else {
            if (confirm("Are you sure you want to delete resume by " + this.resume.author + "?")) {
                this.resumeService.deleteResume(this.resume.id)
                    .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
            }
        }
    };
    ResumeEditComponent.prototype.saveResume = function () {
        var _this = this;
        if (this.resumeForm.dirty && this.resumeForm.valid) {
            var resumeObj = Object.assign({}, this.resume, this.resumeForm.value);
            this.resumeService.saveResume(resumeObj, this.formData)
                .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
        }
        else if (!this.resumeForm.dirty) {
            this.onSaveComplete();
        }
    };
    ResumeEditComponent.prototype.onSaveComplete = function () {
        this.resumeForm.reset();
        this.router.navigate(['/resumes']);
    };
    ResumeEditComponent.prototype.attachResume = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            this.resumeForm.controls['pdfInput'].setValue(file ? file.name : '');
            this.formData.append('uploadFile', file, file.name);
        }
    };
    return ResumeEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControlName */], { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ElementRef */] }),
    __metadata("design:type", Array)
], ResumeEditComponent.prototype, "formInputElements", void 0);
ResumeEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        template: __webpack_require__("../../../../../src/app/resume/resume-edit/resume-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/resume/resume-edit/resume-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__resume_service__["a" /* ResumeService */]) === "function" && _d || Object])
], ResumeEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=resume-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/resume/resume-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ResumeFilterPipe = (function () {
    function ResumeFilterPipe() {
    }
    ResumeFilterPipe.prototype.transform = function (resumes, filterBy) {
        var _this = this;
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? resumes.filter(function (resume) { return _this.filterResumes(resume, filterBy); }) : resumes;
    };
    ResumeFilterPipe.prototype.filterResumes = function (resume, filterBy) {
        var tagFound = false;
        resume.tags.forEach(function (tag) {
            if (tag.toLocaleLowerCase().indexOf(filterBy) !== -1) {
                tagFound = true;
            }
        });
        var matchFound = resume.author.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
            resume.email.toLocaleLowerCase().indexOf(filterBy) !== -1 || tagFound;
        return matchFound;
    };
    return ResumeFilterPipe;
}());
ResumeFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Pipe */])({
        name: 'resumeFilter'
    })
], ResumeFilterPipe);

//# sourceMappingURL=resume-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/resume/resume-guard/resume-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeDetailGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ResumeEditGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResumeDetailGuard = (function () {
    function ResumeDetailGuard(_router) {
        this._router = _router;
    }
    ResumeDetailGuard.prototype.canActivate = function (route) {
        var id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert("Invalid resume Id");
            this._router.navigate(['/resumes']);
            return false;
        }
        return true;
    };
    return ResumeDetailGuard;
}());
ResumeDetailGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], ResumeDetailGuard);

var ResumeEditGuard = (function () {
    function ResumeEditGuard() {
    }
    ResumeEditGuard.prototype.canDeactivate = function (component) {
        if (component.resumeForm.dirty) {
            var resumeName = component.resumeForm.get('author').value || 'New Resume';
            return confirm("Navigate away and lose all changes to " + resumeName + "?");
        }
        return true;
    };
    return ResumeEditGuard;
}());
ResumeEditGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ResumeEditGuard);

var _a;
//# sourceMappingURL=resume-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/resume/resume-list/resume-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "thead {\n    color: royalblue;\n}\n\npdf-viewer {\n    display: block;\n    width:200px;\n    max-width: 200px;\n}\n\n.pdf-border {\n    border: 1px solid black;\n}\n\npdf-viewer:hover {\n    box-shadow: 10px 10px 5px gray;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resume/resume-list/resume-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n        {{pageTitle}}\n        <div class=\"btn-group pull-right\">\n            <a class=\"btn btn-default\"\n               [routerLink]=\"['/resumeEdit/0']\"\n                style=\"margin:4px\">\n                Add Resume</a>\n        </div>\n    </div>\n    <div class=\"panel-body\">\n        <div class=\"row\">\n            <div class=\"col-md-6\" style=\"margin:15px;\">Filter by:\n                <input type=\"text\" [(ngModel)]=\"listFilter\"/>\n                <span class=\"glyphicon glyphicon-remove\" (click)=\"clearFilter()\"></span>\n            </div>\n        </div>\n\n        <div class='has-error' *ngIf='errorMessage'>{{errorMessage}}</div>\n\n        <div class=\"table-responsive\">\n            <table class=\"table\" *ngIf=\"resumes && resumes.length\">\n                <thead>\n                    <tr>\n                        <th style=\"text-align: center\">\n                            <button class=\"btn btn-primary\"\n                                    (click)=\"togglePreview()\">\n                                {{showPreview ? 'Hide' : 'Show'}} Preview\n                            </button>\n                        </th>\n                        <th>Author</th>\n                        <th>Email</th>\n                        <th>Date Added</th>\n                        <th>Tags</th>\n                        <th style=\"width:150px\">5 Star Rating</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let resume of resumes | resumeFilter:listFilter\">\n                        <td>\n                            <pdf-viewer *ngIf=\"showPreview\"\n                                        [src]=\"resume.pdfUrl\"\n                                        [title]=\"resume.author\"\n                                        [render-text]=\"false\"\n                                        [show-all]=\"false\"\n                                        [page]=\"1\"\n                                        [original-size]=\"false\"\n                                        [autoresize]=\"true\"\n                                        [zoom]=\"0.99\"\n                                        (click)=\"openPdf(resume.id)\"\n                                        (page-rendered)=\"pageRendered($event)\"\n                                        [ngClass]=\"{'pdf-border pdf-viewer:hover': pdfsRendered}\">\n                            </pdf-viewer>\n                        </td>\n                        <td>{{resume.author}}\n                        </td>\n                        <td>{{resume.email | convertToSpaces:'-' | lowercase }}</td>\n                        <td>{{resume.createdAt | date }}</td>\n                        <td>\n                            <div class=\"label label-primary\" style=\"margin: 5px\"\n                                  *ngFor=\"let tag of resume.tags\"\n                                  (click)=\"onTagClicked(tag)\">{{tag}}</div>\n                        </td>\n                        <td>\n                            <app-star [rating]=\"resume.starRating\"\n                            (ratingClicked)=\"onRatingClicked($event, resume.id)\">\n                            </app-star>\n                        </td>\n                        <td>\n                            <a class=\"btn btn-primary\"\n                            [routerLink]=\"['/resumeEdit', resume.id]\"\n                            style=\"margin:5px;\">\n                                Edit</a>\n                            <div class=\"btn btn-primary\"\n                                 style=\"margin:5px;\"\n                                 (click)=\"downloadPdf(resume.id)\">\n                                Download\n                            </div>\n                        </td>\n\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/resume/resume-list/resume-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resume_service__ = __webpack_require__("../../../../../src/app/resume/resume.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResumeListComponent = (function () {
    function ResumeListComponent(resumeService) {
        this.resumeService = resumeService;
        this.pageTitle = 'Resumes';
        this.showPreview = true;
        this.pdfsRendered = false;
    }
    //TODO: add disable adblock message
    ResumeListComponent.prototype.togglePreview = function () {
        this.showPreview = !this.showPreview;
    };
    ResumeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resumeService.getResumes()
            .subscribe(function (resumes) {
            _this.resumes = resumes;
            _this.resumes.forEach(function (resume) {
                fetch("data:application/pdf;base64," + resume.file)
                    .then(function (resp) {
                    return resp.blob();
                })
                    .then(function (blob) {
                    resume.pdfData = blob;
                    resume.pdfUrl = URL.createObjectURL(resume.pdfData);
                });
            });
        }, function (error) { return _this.errorMessage = error; });
    };
    ResumeListComponent.prototype.pageRendered = function (event) {
        this.pdfsRendered = true;
    };
    ResumeListComponent.prototype.openPdf = function (id) {
        var resume = this.resumes.find(function (resume) {
            return resume.id === id;
        });
        window.open(resume.pdfUrl);
    };
    ResumeListComponent.prototype.downloadPdf = function (id) {
        var resume = this.resumes.find(function (resume) {
            return resume.id === id;
        });
        __WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"](resume.pdfData, resume.author + ".pdf");
    };
    ResumeListComponent.prototype.onRatingClicked = function (increment, id) {
        var resume = this.resumes.find(function (resume) {
            return resume.id === id;
        });
        var newStarRating = resume.starRating + increment;
        if (newStarRating < 0) {
            resume.starRating = 0;
        }
        else if (newStarRating > 5) {
            resume.starRating = 5;
        }
        else {
            resume.starRating = newStarRating;
        }
    };
    ResumeListComponent.prototype.onTagClicked = function (tag) {
        this.listFilter = tag;
    };
    ResumeListComponent.prototype.clearFilter = function () {
        this.listFilter = "";
    };
    return ResumeListComponent;
}());
ResumeListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        template: __webpack_require__("../../../../../src/app/resume/resume-list/resume-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/resume/resume-list/resume-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resume_service__["a" /* ResumeService */]) === "function" && _a || Object])
], ResumeListComponent);

var _a;
//# sourceMappingURL=resume-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/resume/resume.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resume_list_resume_list_component__ = __webpack_require__("../../../../../src/app/resume/resume-list/resume-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_detail_resume_detail_component__ = __webpack_require__("../../../../../src/app/resume/resume-detail/resume-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resume_guard_resume_guard_service__ = __webpack_require__("../../../../../src/app/resume/resume-guard/resume-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resume_service__ = __webpack_require__("../../../../../src/app/resume/resume.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resume_edit_resume_edit_component__ = __webpack_require__("../../../../../src/app/resume/resume-edit/resume-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resume_filter_pipe__ = __webpack_require__("../../../../../src/app/resume/resume-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_pdf_viewer__ = __webpack_require__("../../../../ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ResumeModule = (function () {
    function ResumeModule() {
    }
    return ResumeModule;
}());
ResumeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_pdf_viewer__["a" /* PdfViewerModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild([
                { path: 'resumes', component: __WEBPACK_IMPORTED_MODULE_1__resume_list_resume_list_component__["a" /* ResumeListComponent */] },
                { path: 'resumes/:id',
                    canActivate: [__WEBPACK_IMPORTED_MODULE_4__resume_guard_resume_guard_service__["a" /* ResumeDetailGuard */]],
                    component: __WEBPACK_IMPORTED_MODULE_2__resume_detail_resume_detail_component__["a" /* ResumeDetailComponent */] },
                { path: 'resumeEdit/:id',
                    canDeactivate: [__WEBPACK_IMPORTED_MODULE_4__resume_guard_resume_guard_service__["b" /* ResumeEditGuard */]],
                    component: __WEBPACK_IMPORTED_MODULE_7__resume_edit_resume_edit_component__["a" /* ResumeEditComponent */] }
            ]),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__resume_list_resume_list_component__["a" /* ResumeListComponent */],
            __WEBPACK_IMPORTED_MODULE_2__resume_detail_resume_detail_component__["a" /* ResumeDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_7__resume_edit_resume_edit_component__["a" /* ResumeEditComponent */],
            __WEBPACK_IMPORTED_MODULE_9__resume_filter_pipe__["a" /* ResumeFilterPipe */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__resume_service__["a" /* ResumeService */],
            __WEBPACK_IMPORTED_MODULE_4__resume_guard_resume_guard_service__["a" /* ResumeDetailGuard */],
            __WEBPACK_IMPORTED_MODULE_4__resume_guard_resume_guard_service__["b" /* ResumeEditGuard */]
        ]
    })
], ResumeModule);

//# sourceMappingURL=resume.module.js.map

/***/ }),

/***/ "../../../../../src/app/resume/resume.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ResumeService = (function () {
    function ResumeService(http) {
        this.http = http;
        this.resumeUrl = '/api/resumes/';
    }
    ResumeService.prototype.getResumes = function () {
        var _this = this;
        return this.http.get(this.resumeUrl)
            .do(function (data) { return _this.httpLog("getResumes", data); })
            .catch(this.handleError);
    };
    ResumeService.prototype.getResume = function (id) {
        var _this = this;
        if (id === 0) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.initializeResume());
        }
        return this.http.get(this.resumeUrl + id)
            .do(function (data) { return _this.httpLog("getResume(" + id + ")", data); })
            .catch(this.handleError);
    };
    ResumeService.prototype.deleteResume = function (id) {
        var _this = this;
        return this.http.delete(this.resumeUrl + id)
            .do(function (data) { return _this.httpLog("deleteResume(" + id + ")", data); })
            .catch(this.handleError);
    };
    ResumeService.prototype.saveResume = function (resume, formData) {
        if (resume.id === 0) {
            return this.createResume(resume, formData);
        }
        //TODO: update to post formData
        return this.updateResume(resume);
    };
    ResumeService.prototype.createResume = function (resume, formData) {
        var _this = this;
        resume.id = undefined;
        formData.append('resume', new Blob([JSON.stringify(resume)], {
            type: "application/json"
        }));
        return this.http.post(this.resumeUrl, formData)
            .do(function (data) { return _this.httpLog('createResume', data); })
            .catch(this.handleError);
    };
    ResumeService.prototype.updateResume = function (resume) {
        var _this = this;
        return this.http.put(this.resumeUrl + resume.id, resume)
            .do(function (data) { return _this.httpLog("createResume(" + resume.id + ")", data); })
            .catch(this.handleError);
    };
    ResumeService.prototype.httpLog = function (title, data) {
        var printObj = {
            length: data.length
        };
        printObj[title] = data;
        console.log(printObj);
    };
    ResumeService.prototype.handleError = function (err) {
        console.log(err);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err.message);
    };
    ResumeService.prototype.initializeResume = function () {
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
    };
    return ResumeService;
}());
ResumeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], ResumeService);

var _a;
//# sourceMappingURL=resume.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/convert-to-spaces.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertToSpacesPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConvertToSpacesPipe = (function () {
    function ConvertToSpacesPipe() {
    }
    ConvertToSpacesPipe.prototype.transform = function (value, character) {
        return value.replace(character, ' ');
    };
    return ConvertToSpacesPipe;
}());
ConvertToSpacesPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Pipe */])({
        name: 'convertToSpaces'
    })
], ConvertToSpacesPipe);

//# sourceMappingURL=convert-to-spaces.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/generic-validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericValidator; });

// Generic validator for Reactive forms
// Implemented as a class, not a service, so it can retain state for multiple forms.
var GenericValidator = (function () {
    // Provide the set of valid validation messages
    // Stucture:
    // controlName1: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // },
    // controlName2: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // }
    function GenericValidator(validationMessages) {
        this.validationMessages = validationMessages;
    }
    // Processes each control within a FormGroup
    // And returns a set of validation messages to display
    // Structure
    // controlName1: 'Validation Message.',
    // controlName2: 'Validation Message.'
    GenericValidator.prototype.processMessages = function (container) {
        var _this = this;
        var messages = {};
        var _loop_1 = function (controlKey) {
            if (container.controls.hasOwnProperty(controlKey)) {
                var c = container.controls[controlKey];
                // If it is a FormGroup, process its child controls.
                if (c instanceof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* FormGroup */]) {
                    var childMessages = this_1.processMessages(c);
                    Object.assign(messages, childMessages);
                }
                else {
                    // Only validate if there are validation messages for the control
                    if (this_1.validationMessages[controlKey]) {
                        messages[controlKey] = '';
                        if ((c.dirty || c.touched) && c.errors) {
                            Object.keys(c.errors).map(function (messageKey) {
                                if (_this.validationMessages[controlKey][messageKey]) {
                                    messages[controlKey] += _this.validationMessages[controlKey][messageKey] + ' ';
                                }
                            });
                        }
                    }
                }
            }
        };
        var this_1 = this;
        for (var controlKey in container.controls) {
            _loop_1(controlKey);
        }
        return messages;
    };
    GenericValidator.prototype.getErrorCount = function (container) {
        var errorCount = 0;
        for (var controlKey in container.controls) {
            if (container.controls.hasOwnProperty(controlKey)) {
                if (container.controls[controlKey].errors) {
                    errorCount += Object.keys(container.controls[controlKey].errors).length;
                    console.log(errorCount);
                }
            }
        }
        return errorCount;
    };
    return GenericValidator;
}());

//# sourceMappingURL=generic-validator.js.map

/***/ }),

/***/ "../../../../../src/app/shared/number-validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberValidator; });
var NumberValidator = (function () {
    function NumberValidator() {
    }
    NumberValidator.range = function (min, max) {
        return function (c) {
            if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
                return { 'range': true };
            }
            return null;
        };
    };
    return NumberValidator;
}());

//# sourceMappingURL=number-validator.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__star_component__ = __webpack_require__("../../../../../src/app/shared/star.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__convert_to_spaces_pipe__ = __webpack_require__("../../../../../src/app/shared/convert-to-spaces.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__star_component__["a" /* StarComponent */],
            __WEBPACK_IMPORTED_MODULE_4__convert_to_spaces_pipe__["a" /* ConvertToSpacesPipe */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__star_component__["a" /* StarComponent */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__convert_to_spaces_pipe__["a" /* ConvertToSpacesPipe */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/star.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".crop {\n    overflow: hidden;\n}\ndiv {\n    cursor: pointer;\n}\n\n.shift-left {\n    float: left;\n    width: 75%;\n}\n\n.shift-right {\n    float: left;\n    width: 25%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/star.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"shift-right\">\n    <span class=\"glyphicon glyphicon-triangle-top\"\n          style=\"display: block;\"\n          (click)=\"onUpvote()\"></span>\n    <span class=\"glyphicon glyphicon-triangle-bottom\"\n          (click)=\"onDownvote()\"></span>\n</div>\n<div class=\"crop shift-left\"\n     [style.width.px]=\"starWidth\"\n    [title]=\"rating\">\n    <div style=\"width: 86px\">\n        <span class=\"glyphicon glyphicon-star\"></span>\n        <span class=\"glyphicon glyphicon-star\"></span>\n        <span class=\"glyphicon glyphicon-star\"></span>\n        <span class=\"glyphicon glyphicon-star\"></span>\n        <span class=\"glyphicon glyphicon-star\"></span>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/star.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarComponent = (function () {
    function StarComponent() {
        this.ratingClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]();
    }
    StarComponent.prototype.ngOnChanges = function () {
        this.starWidth = this.rating * 80 / 5;
    };
    // onClick(): void {
    //     this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    // }
    StarComponent.prototype.onUpvote = function () {
        this.ratingClicked.emit(1);
    };
    StarComponent.prototype.onDownvote = function () {
        this.ratingClicked.emit(-1);
    };
    return StarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", Number)
], StarComponent.prototype, "rating", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]) === "function" && _a || Object)
], StarComponent.prototype, "ratingClicked", void 0);
StarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-star',
        template: __webpack_require__("../../../../../src/app/shared/star.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/star.component.css")]
    })
], StarComponent);

var _a;
//# sourceMappingURL=star.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[5]);
//# sourceMappingURL=main.bundle.js.map