System.register(["@angular/core", "@angular/forms", "./media-item.service", "./providers", "@angular/router"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, forms_1, media_item_service_1, providers_1, router_1, MediaItemFormComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (media_item_service_1_1) {
                media_item_service_1 = media_item_service_1_1;
            },
            function (providers_1_1) {
                providers_1 = providers_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            MediaItemFormComponent = /** @class */ (function () {
                function MediaItemFormComponent(formBuilder, mediaItemService, lookupLists, route, router) {
                    this.formBuilder = formBuilder;
                    this.mediaItemService = mediaItemService;
                    this.lookupLists = lookupLists;
                    this.route = route;
                    this.router = router;
                    this.event = null;
                }
                MediaItemFormComponent.prototype.uploadFile = function (event) {
                    this.event = event;
                };
                MediaItemFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.idMI = parseInt(this.route.snapshot.paramMap.get('id'));
                    if (this.idMI == null) {
                        this.form = this.formBuilder.group({
                            medium: 'Movies',
                            name: ['', forms_1.Validators.compose([
                                    forms_1.Validators.required,
                                    forms_1.Validators.pattern('[\\w\\-\\s\\/]+')
                                ])],
                            category: [''],
                            year: ['', this.yearValidator],
                            description: [''],
                        });
                    }
                    else {
                        this.mediaItemService.getmediaItem(this.idMI)
                            .subscribe(function (mediaItems) {
                            _this.form = _this.formBuilder.group({
                                medium: [mediaItems[0].medium],
                                name: [mediaItems[0].name, forms_1.Validators.compose([
                                        forms_1.Validators.required,
                                        forms_1.Validators.pattern('[\\w\\-\\s\\/]+')
                                    ])],
                                category: [mediaItems[0].category],
                                year: [String((mediaItems[0].year == null) ? '' : mediaItems[0].year), _this.yearValidator],
                                description: [mediaItems[0].description]
                            });
                        });
                    }
                };
                MediaItemFormComponent.prototype.yearValidator = function (control) {
                    if (control.value.trim().length === 0)
                        return null;
                    var year = parseInt(control.value);
                    var minYear = 1800;
                    var maxYear = 2500;
                    if (year >= minYear && year <= maxYear)
                        return null;
                    return { 'year': { 'min': minYear, 'max': maxYear } };
                };
                MediaItemFormComponent.prototype.readUrl = function (event) {
                    var _this = this;
                    if (event.target.files && event.target.files[0]) {
                        var reader = new FileReader();
                        reader.onload = function (event) {
                            _this.url = event.target.result;
                        };
                        reader.readAsDataURL(event.target.files[0]);
                    }
                };
                MediaItemFormComponent.prototype.onSubmit = function (mediaItem) {
                    var _this = this;
                    if (this.idMI == null) {
                        /*
                        if(this.event.target.files[0]){
                            let formData: FormData = new FormData();
                                formData.append('file', this.event.target.files[0], this.event.target.files[0].name);
                                this.mediaItemService.upload(this.event)
                                .subscribe(() => {
                                });
                            }
                            */
                        this.mediaItemService.add(mediaItem)
                            .subscribe(function () {
                            _this.router.navigate(['../List', { medium: mediaItem.medium }]);
                        });
                    }
                    else {
                        this.mediaItemService.edit(this.idMI, mediaItem)
                            .subscribe(function () {
                            _this.router.navigate(['../List', { medium: mediaItem.medium }]);
                        });
                    }
                };
                MediaItemFormComponent = __decorate([
                    core_1.Component({
                        selector: 'media-item-form',
                        templateUrl: 'app/media-item-form.component.html',
                        styleUrls: ['app/media-item-form.component.css']
                    }),
                    __param(2, core_1.Inject(providers_1.LOOKUP_LISTS)),
                    __metadata("design:paramtypes", [forms_1.FormBuilder,
                        media_item_service_1.MediaItemService, Object, router_1.ActivatedRoute,
                        router_1.Router])
                ], MediaItemFormComponent);
                return MediaItemFormComponent;
            }());
            exports_1("MediaItemFormComponent", MediaItemFormComponent);
        }
    };
});
//# sourceMappingURL=media-item-form.component.js.map