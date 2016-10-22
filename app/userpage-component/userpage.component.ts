import { Component, OnInit, HostListener, Directive, Input } from '@angular/core';
import { Router } from '@angular/router';

import {SessionService}           from '../session-service/session.service';
import { Game } from '../game/game';
import { GameService } from '../game-service/game.service';






@Component({
  moduleId: module.id,
  selector: 'my-userpage',
  templateUrl: 'userpage.component.html',
  styleUrls: []


})

export class UserpageComponent implements OnInit {

  user_id: string;
  user_login: string;
  ss: SessionService;

  games: Game[] = [];


  constructor(
    private router: Router,
    private gameService: GameService,
    private ss : SessionService) {
    this.ss = ss;
  }

  ngOnInit(): void {

      
      this.gameService.getGames()
        .then(games => this.games = games.slice(0,2));



  }



}
