System.register(["./app.component", "./media-item.service", "./providers", "@angular/common/http", "@angular/router", "@angular/core", "./media-item-list.component", "./favorite.directive", "./media-item-form.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var app_component_1, media_item_service_1, providers_1, http_1, router_1, core_1, media_item_list_component_1, favorite_directive_1, media_item_form_component_1, AppModule;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (media_item_service_1_1) {
                media_item_service_1 = media_item_service_1_1;
            },
            function (providers_1_1) {
                providers_1 = providers_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (media_item_list_component_1_1) {
                media_item_list_component_1 = media_item_list_component_1_1;
            },
            function (favorite_directive_1_1) {
                favorite_directive_1 = favorite_directive_1_1;
            },
            function (media_item_form_component_1_1) {
                media_item_form_component_1 = media_item_form_component_1_1;
            }
        ],
        execute: function () {
            AppModule = /** @class */ (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        declarations: [
                            app_component_1.AppComponent, media_item_service_1.MediaItemService, favorite_directive_1.FavoriteDirective
                        ],
                        imports: [http_1.HttpClientModule, router_1.RouterModule.forRoot([
                                {
                                    path: ':medium', component: media_item_list_component_1.MediaItemListComponent
                                },
                                {
                                    path: 'add', component: media_item_form_component_1.MediaItemFormComponent
                                },
                                {
                                    path: 'edit/:id', component: media_item_form_component_1.MediaItemFormComponent
                                }
                            ])
                        ],
                        providers: [
                            { provide: providers_1.LOOKUP_LISTS, useValue: providers_1.lookupLists }
                        ],
                        bootstrap: [app_component_1.AppComponent, media_item_service_1.MediaItemService]
                    })
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.js.map