import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {SessionService}           from '../session-service/session.service';

@Component({
  moduleId: module.id,
  selector: 'my-topmenu',
  template:
  `
  <ul>
  <li><a (click)="gotoHomepage()" >Games</a></li>
  
  <li *ngIf="ss.session" id="mypage"><a (click)="gotoUserpage()" >My page</a></li>
  <li *ngIf="!ss.session" style="float:right" (click)="displayLoginComponent()" ><a class="active" >Login</a></li>
  <li *ngIf="ss.session" style="float:right" (click)="logout()" ><a class="active" >Logout</a></li>
</ul>
  <my-login id="login" (userId)="onLoginEvent($event);" ></my-login>


  `,
  styleUrls: ['topmenu.component.css']


})


export class TopmenuComponent {

    ss: SessionService;

  displayLoginComponent() : void {
    document.getElementById("login").style.visibility = "visible";
  }

  logout() : void {
    this.ss.session = false;
  }

  onLoginEvent(event) {
      if( event.value != "0") {
        document.getElementById("login").style.visibility = "hidden";
        this.ss.session = true;
      }
    }

    constructor(private ss : SessionService,private router: Router) {
      this.ss = ss;
    }


    gotoUserpage(): void {
      let link = ['/userpage'];
      this.router.navigate(link);
    }

    gotoHomepage(): void {
    let link = ['/'];
    this.router.navigate(link);
    }


}
