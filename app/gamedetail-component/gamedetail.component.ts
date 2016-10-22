import { Component, Input, OnInit } from '@angular/core';
import { Game }          from './game/game';
import { GameService } from '../game-service/game.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import {SessionService}           from '../session-service/session.service';

@Component({
  moduleId: module.id,
  selector: 'my-gamedetail',
  templateUrl: 'gamedetail.component.html',

  styleUrls: ['gamedetail.component.css']


})


export class GameDetailComponent implements OnInit {

  game: Game;
  ss: SessionService;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private ss : SessionService) {
    this.ss = ss;
  }

  ngOnInit(): void {



  let id = +this.route.params._value.id;

    this.id = id;
    console.log(this.id);

      this.gameService.getGames()
        .then(games => this.game = games[this.id-11]);


  }

  checkBought(): boolean {
  if (this.ss.session) {
    if (this.id == 11 || this.id == 12) {
      return true;
      }
    }
    return false;
  }


  goBack(): void {
    this.location.back();
  }
}
