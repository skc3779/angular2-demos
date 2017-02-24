var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ContentChildren, Directive, Input, QueryList } from '@angular/core';
export var Word = (function () {
    function Word() {
    }
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], Word.prototype, "value", void 0);
    Word = __decorate([
        Directive({ selector: 'word' }), 
        __metadata('design:paramtypes', [])
    ], Word);
    return Word;
}());
export var WordGroup = (function () {
    function WordGroup() {
    }
    Object.defineProperty(WordGroup.prototype, "words", {
        get: function () { return this.word ? this.word.map(function (p) { return p.value; }).join(', ') : ''; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        ContentChildren(Word), 
        __metadata('design:type', (typeof (_a = typeof QueryList !== 'undefined' && QueryList) === 'function' && _a) || Object)
    ], WordGroup.prototype, "word", void 0);
    WordGroup = __decorate([
        Component({
            selector: 'word-group',
            template: "{{words}}"
        }), 
        __metadata('design:paramtypes', [])
    ], WordGroup);
    return WordGroup;
    var _a;
}());
export var ContentChildrenComp = (function () {
    function ContentChildrenComp() {
        this.cnt = 0;
    }
    ContentChildrenComp.prototype.add = function () {
        if (this.cnt == 4) {
            this.cnt = 0;
        }
        else {
            this.cnt++;
        }
    };
    ContentChildrenComp = __decorate([
        Component({
            selector: 'example-app',
            template: "\n    <button (click)=\"add()\">\uCD94\uAC00</button>\n    <word-group>\n      <word value=\"apple\"  *ngIf=\"cnt>=0\"></word>\n      <word value=\"grape\"  *ngIf=\"cnt>=1\"></word>\n      <word value=\"banana\" *ngIf=\"cnt>=2\"></word>\n      <word value=\"mango\"  *ngIf=\"cnt>=3\"></word>\n      <word value=\"orange\" *ngIf=\"cnt>=4\"></word>\n    </word-group>"
        }), 
        __metadata('design:paramtypes', [])
    ], ContentChildrenComp);
    return ContentChildrenComp;
}());
//# sourceMappingURL=C:/Sources_m/angular2-domes/ng2-book/component/src/app/contentchildren/contentchildren.component.js.map