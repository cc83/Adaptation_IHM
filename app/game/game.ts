import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-game',
  template:
  `
  <div *ngIf="!withoutimage" >

  <div class="box">

    <div id="name">{{name}}</div>

    <img src="{{image}}" />
    <div id="price">Price : <span>{{price}} €</span></div>

</div>
  </div>

  <div *ngIf="withoutimage" class="all">

  <div class='inline'>
    <span id="name">{{name}}</span><span id="euros">{{price}} €</span>

  </div>
</div>

  `,
  styleUrls: ['game.css']


})


export class Game {
@Input() name;
@Input() image;
@Input() withoutimage;
@Input() price;
  id: number;
  name: string;
  image: string;
  withoutimage: boolean;
  price: number;
}
