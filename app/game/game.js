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
var core_1 = require("@angular/core");
var Game = (function () {
    function Game() {
    }
    return Game;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Game.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Game.prototype, "image", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Game.prototype, "withoutimage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Game.prototype, "price", void 0);
Game = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-game',
        template: "\n  <div *ngIf=\"!withoutimage\" >\n\n  <div class=\"box\">\n\n    <div id=\"name\">{{name}}</div>\n\n    <img src=\"{{image}}\" />\n    <div id=\"price\">Price : <span>{{price}} \u20AC</span></div>\n\n</div>\n  </div>\n\n  <div *ngIf=\"withoutimage\" class=\"all\">\n\n  <div class='inline'>\n    <span id=\"name\">{{name}}</span><span id=\"euros\">{{price}} \u20AC</span>\n\n  </div>\n</div>\n\n  ",
        styleUrls: ['game.css']
    }),
    __metadata("design:paramtypes", [])
], Game);
exports.Game = Game;
//# sourceMappingURL=game.js.map