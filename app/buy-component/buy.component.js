"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var BuyComponent = (function () {
    function BuyComponent() {
        this.validation = new core_1.EventEmitter();
    }
    BuyComponent.prototype.payment_accepted = function () {
        this.validation.emit({
            value: true
        });
    };
    return BuyComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BuyComponent.prototype, "price", void 0);
__decorate([
    core_1.Output("validation"),
    __metadata("design:type", core_1.EventEmitter)
], BuyComponent.prototype, "validation", void 0);
BuyComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-buy',
        template: "\n    <div *ngIf=\"price\" id=\"main\">\n\n    <div>Transaction amount :{{price}} \u20AC </div>\n    <button (click)=\"payment_accepted()\" >Pay</button>\n\n    </div>\n  ",
        styleUrls: ['buy.component.css']
    }),
    __metadata("design:paramtypes", [])
], BuyComponent);
exports.BuyComponent = BuyComponent;
//# sourceMappingURL=buy.component.js.map