System.register(["@angular/core", "./media-item.component", "./category-list.pipe", "@angular/router"], function (exports_1, context_1) {
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
    var core_1, media_item_component_1, category_list_pipe_1, router_1, MediaItemListComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (media_item_component_1_1) {
                media_item_component_1 = media_item_component_1_1;
            },
            function (category_list_pipe_1_1) {
                category_list_pipe_1 = category_list_pipe_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            MediaItemListComponent = /** @class */ (function () {
                function MediaItemListComponent(route, router) {
                    this.route = route;
                    this.router = router;
                    this.medium = '';
                    this.mediaItems = [];
                    this.items = [];
                }
                MediaItemListComponent.prototype.ngOnInit = function () {
                    this.medium = this.route.snapshot.paramMap.get('medium');
                    this.getMediaItems(this.medium);
                };
                MediaItemListComponent.prototype.TYS = function () {
                    window.alert("1");
                };
                MediaItemListComponent.prototype.onMediaItemDeleted = function (mediaItem) {
                };
                MediaItemListComponent.prototype.onMediaItemEdited = function (mediaItem) {
                    this.router.navigate(['/edit', mediaItem.id]);
                };
                MediaItemListComponent.prototype.getMediaItems = function (medium) {
                    this.medium = medium;
                };
                MediaItemListComponent = __decorate([
                    core_1.Component({
                        selector: 'media-item-list',
                        entryComponents: [media_item_component_1.MediaItemComponent],
                        providers: [category_list_pipe_1.CategoryListPipe],
                        templateUrl: 'app/media-item-list.component.html',
                        styleUrls: ['app/media-item-list.component.css']
                    }),
                    __metadata("design:paramtypes", [router_1.ActivatedRoute,
                        router_1.Router])
                ], MediaItemListComponent);
                return MediaItemListComponent;
            }());
            exports_1("MediaItemListComponent", MediaItemListComponent);
        }
    };
});
//# sourceMappingURL=media-item-list.component.js.map