System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var core_1, lookupLists, LOOKUP_LISTS;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            exports_1("lookupLists", lookupLists = {
                mediums: ['Movies', 'Series']
            });
            exports_1("LOOKUP_LISTS", LOOKUP_LISTS = new core_1.InjectionToken('LookupLists'));
        }
    };
});
//# sourceMappingURL=providers.js.map