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
var game_service_1 = require("../game-service/game.service");
var router_1 = require("@angular/router");
var session_service_1 = require("../session-service/session.service");
var GameDetailComponent = (function () {
    function GameDetailComponent(route, gameService, ss) {
        this.route = route;
        this.gameService = gameService;
        this.ss = ss;
        this.ss = ss;
    }
    GameDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.params._value.id;
        this.id = id;
        console.log(this.id);
        this.gameService.getGames()
            .then(function (games) { return _this.game = games[_this.id - 11]; });
    };
    GameDetailComponent.prototype.checkBought = function () {
        if (this.ss.session) {
            if (this.id == 11 || this.id == 12) {
                return true;
            }
        }
        return false;
    };
    GameDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return GameDetailComponent;
}());
GameDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-gamedetail',
        templateUrl: 'gamedetail.component.html',
        styleUrls: ['gamedetail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        game_service_1.GameService,
        session_service_1.SessionService])
], GameDetailComponent);
exports.GameDetailComponent = GameDetailComponent;
//# sourceMappingURL=gamedetail.component.js.map