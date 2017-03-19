"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ChildrenResolve = (function () {
    function ChildrenResolve(cs, router) {
        this.cs = cs;
        this.router = router;
    }
    //resolve(route: ActivatedRouteSnapshot): Promise<Children> | boolean {
    ChildrenResolve.prototype.resolve = function (route) {
        var _this = this;
        var id = +route.params['id'];
        console.log('ChildrenResolve', id);
        return this.cs.findById(id).then(function (children) {
            if (children) {
                return children;
            }
            else {
                _this.router.navigate(['/not-found']);
                return false;
            }
        });
    };
    ChildrenResolve = __decorate([
        core_1.Injectable()
    ], ChildrenResolve);
    return ChildrenResolve;
}());
exports.ChildrenResolve = ChildrenResolve;
