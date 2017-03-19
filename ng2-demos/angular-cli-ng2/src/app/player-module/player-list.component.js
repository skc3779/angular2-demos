"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var PlayerListComponent = (function () {
    function PlayerListComponent() {
        this.player = 'player!';
    }
    PlayerListComponent = __decorate([
        core_1.Component({
            selector: 'player-list',
            template: "\n  <p>\uC9C0\uC2DC\uC790\uC640 \uD30C\uC774\uD504\uB97C \uACF5\uC720 \uBAA8\uB4C8\uD654</p>\n  <div highlight>{{player|myupper}}</div>\n"
        })
    ], PlayerListComponent);
    return PlayerListComponent;
}());
exports.PlayerListComponent = PlayerListComponent;
