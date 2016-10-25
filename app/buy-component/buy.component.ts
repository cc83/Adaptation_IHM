import { Component,Input, Output, EventEmitter } from '@angular/core';



@Component({
  moduleId: module.id,
  selector: 'my-buy',
  template: `
    <div *ngIf="price" id="main">

    <div>Transaction amount :{{price}} € </div>
    <button (click)="payment_accepted()" >Pay</button>

    </div>
  `
  ,

  styleUrls: ['buy.component.css']


})


export class BuyComponent {

  @Input() price;
  @Output("validation") validation: EventEmitter<boolean>  = new EventEmitter();


  payment_accepted(): boolean {
    this.validation.emit({
      value: true;
    })
  }


}
