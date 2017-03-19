"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Word = (function () {
    function Word() {
    }
    __decorate([
        core_1.Input()
    ], Word.prototype, "value", void 0);
    Word = __decorate([
        core_1.Directive({ selector: 'word' })
    ], Word);
    return Word;
}());
exports.Word = Word;
var WordGroup = (function () {
    function WordGroup() {
    }
    Object.defineProperty(WordGroup.prototype, "words", {
        get: function () { return this.word ? this.word.map(function (p) { return p.value; }).join(', ') : ''; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ContentChildren(Word)
    ], WordGroup.prototype, "word", void 0);
    WordGroup = __decorate([
        core_1.Component({
            selector: 'word-group',
            template: "{{words}}"
        })
    ], WordGroup);
    return WordGroup;
}());
exports.WordGroup = WordGroup;
var ContentChildrenComp = (function () {
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
        core_1.Component({
            selector: 'example-app',
            template: "<div class=\"resource\">\n    <button (click)=\"add()\">\uCD94\uAC00</button>\n    <word-group>\n      <word value=\"apple\"  *ngIf=\"cnt>=0\"></word>\n      <word value=\"grape\"  *ngIf=\"cnt>=1\"></word>\n      <word value=\"banana\" *ngIf=\"cnt>=2\"></word>\n      <word value=\"mango\"  *ngIf=\"cnt>=3\"></word>\n      <word value=\"orange\" *ngIf=\"cnt>=4\"></word>\n    </word-group></div>"
        })
    ], ContentChildrenComp);
    return ContentChildrenComp;
}());
exports.ContentChildrenComp = ContentChildrenComp;
