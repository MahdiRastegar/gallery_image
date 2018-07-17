System.register(["@angular/core", "@angular/http", "rxjs/add/operator/map"], function (exports_1, context_1) {
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
    var core_1, http_1, MediaItemService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            MediaItemService = /** @class */ (function () {
                function MediaItemService(http) {
                    this.http = http;
                    this.getAll = function () {
                        return null;
                    };
                }
                MediaItemService.prototype.get = function (medium) {
                    var searchParams = new http_1.URLSearchParams();
                    searchParams.append('medium', medium);
                    return this.http.get('mediaitems', { search: searchParams })
                        .subscribe(function (response) {
                        return response.json().mediaItems;
                    });
                };
                MediaItemService.prototype.getmediaItem = function (id) {
                    return this.http.get("mediaitems/" + id)
                        .subscribe(function (response) {
                        return response.json().mediaItems;
                    });
                };
                MediaItemService.prototype.TYS2 = function () {
                    /* var mediaItem:WeatherForecast;
                     window.alert(location.href+ 'api/WeatherForecasts');
                     this.http.get(location.href+ 'api/WeatherForecasts').map(res=>res.json()).map((items:Array<any>)=>{
                         let result:Array<WeatherForecast>=[];
                         if(items)
                         {
                             window.alert(items);
                             items.forEach(item=>{
                                 result.push(new WeatherForecast(
                                     item.id,item.name,item.medium,item.category,item.year,item.watchedOn,item.isFavorite,item.description,item.url
                                 ));
                             });
                         }
                         
                         return result;
                     }).subscribe(
                             data=>{
                                 this.items=data;
                                 console.log(this.items);
                             },err=>console.log(err)
                     );
                     window.alert('mediaItem.name');*/
                    var et = "";
                    window.alert(location.href + 'api/WeatherForecasts');
                    var mediaItem;
                    this.getAll().subscribe(function (data) { return mediaItem = data; }, function (err) { return et = err; });
                    window.alert(et + mediaItem.length);
                };
                MediaItemService.prototype.add = function (mediaItem) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    return this.http.post('mediaitems', JSON.stringify(mediaItem), { headers: headers })
                        .subscribe(function (response) { });
                };
                MediaItemService.prototype.edit = function (id, mediaItem) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    return this.http.post("mediaitems/" + 1, JSON.stringify(mediaItem), { headers: headers })
                        .subscribe(function (response) { });
                };
                MediaItemService.prototype.upload = function (event) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var formData = new FormData();
                    formData.append('file', event, event.target.files[0].name);
                    return this.http.post('Image', JSON.stringify(formData), { headers: headers })
                        .subscribe(function (response) { });
                };
                MediaItemService.prototype.delete = function (mediaItem) {
                    return this.http.delete("mediaitems/" + mediaItem.id)
                        .subscribe(function (response) { });
                };
                MediaItemService = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [http_1.Http])
                ], MediaItemService);
                return MediaItemService;
            }());
            exports_1("MediaItemService", MediaItemService);
        }
    };
});
//# sourceMappingURL=media-item.service.js.map