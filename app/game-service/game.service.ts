import { Game } from '../game/game';
import { GAMES } from '../mock-games/mock.games';
import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

  getGames(): Promise<Game[]> {
    return Promise.resolve(GAMES);
  }
/*
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getHeroes());
  }
*/

  getGame(id: number): Promise<Game> {
    return this.getGames()
               .then(games => games.find(game => game.id === id));
  }
}


