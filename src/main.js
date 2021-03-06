System.register(["@angular/platform-browser-dynamic", "./app"], function (exports_1, context_1) {
    "use strict";
    var platform_browser_dynamic_1, app_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }
        ],
        execute: function () {
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_1.AppModule)
                .then(function (success) { return console.log("Bootstrap success"); })
                .catch(function (err) { return console.error(err); });
        }
    };
});
//# sourceMappingURL=main.js.map