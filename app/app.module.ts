import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { CommonModule } from '@angular/common';
import { ResponsiveModule, ResponsiveConfig, ResponsiveConfigInterface } from 'ng2-responsive';



import { MainComponent }         from './maincomponent/maincomponent';
import { DashboardComponent }   from './dashboard-component/dashboard.component';
import { GameService }          from './game-service/game.service';
import { GameDirective }          from './game-directive/game.directive';
import { Game }          from './game/game';
import { TopmenuComponent }          from './topmenu-component/topmenu.component';
import { GameDetailComponent }          from './gamedetail-component/gamedetail.component';
import {LoginComponent }          from './login-component/login.component';
import {SessionService}           from './session-service/session.service';
import {UserpageComponent}       from './userpage-component/userpage.component'
import {BuyComponent}             from './buy-component/buy.component';

let config: ResponsiveConfigInterface = {
    breakPoints: {
    xs: {max: 600},
            sm: {min: 601, max: 959},
            md: {min: 960, max: 1279},
            lg: {min: 1280, max: 1919},
            xl: {min: 1920}
    },
    debounceTime: 100 // allow to debounce checking timer
 };



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ResponsiveModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      { path: 'detail/:id',
      component: GameDetailComponent
      }
      ,
      { path: 'userpage',
      component: UserpageComponent
      }
    ], {useHash: true})
  ],
  declarations: [
    MainComponent,
	DashboardComponent,
	GameDirective,
  Game,
  TopmenuComponent,
  GameDetailComponent,
  LoginComponent,
  UserpageComponent,
  BuyComponent,
  ],
  providers: [
    GameService,
    {provide: ResponsiveConfig, useFactory: () => new ResponsiveConfig(config) },
    SessionService
  ],
  bootstrap: [MainComponent]
})

export class AppModule {
}
