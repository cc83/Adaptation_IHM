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
var router_1 = require("@angular/router");
var session_service_1 = require("../session-service/session.service");
var game_service_1 = require("../game-service/game.service");
var UserpageComponent = (function () {
    function UserpageComponent(router, gameService, ss) {
        this.router = router;
        this.gameService = gameService;
        this.ss = ss;
        this.games = [];
        this.ss = ss;
    }
    UserpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameService.getGames()
            .then(function (games) { return _this.games = games.slice(0, 2); });
    };
    return UserpageComponent;
}());
UserpageComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-userpage',
        templateUrl: 'userpage.component.html',
        styleUrls: []
    }),
    __metadata("design:paramtypes", [router_1.Router,
        game_service_1.GameService,
        session_service_1.SessionService])
], UserpageComponent);
exports.UserpageComponent = UserpageComponent;
//# sourceMappingURL=userpage.component.js.map