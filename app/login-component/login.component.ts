import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'my-login',
  template:
  `<div *ngIf="!is_logged">
    <input [(ngModel)]="login" placeholder="login">
    <input [(ngModel)]="password" placeholder="password">
    <button (click)="check_login()" >Login</button>

    </div>
  `,
  styleUrls: []



})


export class LoginComponent  {

  @Output('userId') userIdChange = new EventEmitter<string>();

  login: string;
  password: string;
  is_logged:boolean;

  is_logged = false;




  check_login(): boolean {
  this.userIdChange.emit({
    value: "1";
  })
  }
}
