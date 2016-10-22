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
var LoginComponent = (function () {
    function LoginComponent() {
        this.userIdChange = new core_1.EventEmitter();
        this.is_logged = false;
    }
    LoginComponent.prototype.check_login = function () {
        this.userIdChange.emit({
            value: "1"
        });
    };
    return LoginComponent;
}());
__decorate([
    core_1.Output('userId'),
    __metadata("design:type", Object)
], LoginComponent.prototype, "userIdChange", void 0);
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-login',
        template: "<div *ngIf=\"!is_logged\">\n    <input [(ngModel)]=\"login\" placeholder=\"login\">\n    <input [(ngModel)]=\"password\" placeholder=\"password\">\n    <button (click)=\"check_login()\" >Login</button>\n\n    </div>\n  ",
        styleUrls: []
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map