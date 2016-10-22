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
var mock_games_1 = require("../mock-games/mock.games");
var core_1 = require("@angular/core");
var GameService = (function () {
    function GameService() {
    }
    GameService.prototype.getGames = function () {
        return Promise.resolve(mock_games_1.GAMES);
    };
    /*
      getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
          setTimeout(resolve, 2000)) // delay 2 seconds
          .then(() => this.getHeroes());
      }
    */
    GameService.prototype.getGame = function (id) {
        return this.getGames()
            .then(function (games) { return games.find(function (game) { return game.id === id; }); });
    };
    return GameService;
}());
GameService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], GameService);
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map