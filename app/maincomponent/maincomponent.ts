import { Component } from '@angular/core';
import {LoginComponent }          from './login-component/login.component';
import {SessionService}           from '../session-service/session.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'maincomponent.html',
  styleUrls: ['maincomponent.css']
})

export class MainComponent {
  title = 'E-commerce';
  ss: SessionService;

  constructor(private ss : SessionService) {
    this.ss = ss;
  }
}
