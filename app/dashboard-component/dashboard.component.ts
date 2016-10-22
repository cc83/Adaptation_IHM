import { Component, OnInit, HostListener, Directive, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Game } from '../game/game';
import { GameService } from '../game-service/game.service';






@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']


})

export class DashboardComponent implements OnInit {

  @Input() customGames;
  @Input() games;
  customGames: boolean;
  customGames = false;
  games: Game[] = [];




  constructor(
    private router: Router,
    private gameService: GameService) {

  }

  ngOnInit(): void {

    if (!this.customGames) {
    this.gameService.getGames()
      .then(games => this.games = games);  //tous les jeux
    }
    else {
      //rien puisque les jeux auront ete transmis en parametre
    }


  }

  gotoDetail(game: Game): void {
    let link = ['/detail', game.id];
    this.router.navigate(link);
  }
}
