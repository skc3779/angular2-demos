"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
// platform의 bootscrapModul() 메서드에 app.module.ts에서 정의한
// appModules을 지정 함.
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map