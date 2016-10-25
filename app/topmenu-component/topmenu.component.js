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
var router_1 = require("@angular/router");
var session_service_1 = require("../session-service/session.service");
var TopmenuComponent = (function () {
    function TopmenuComponent(ss, router) {
        this.ss = ss;
        this.router = router;
        this.ss = ss;
    }
    TopmenuComponent.prototype.displayLoginComponent = function () {
        document.getElementById("login").style.visibility = "visible";
    };
    TopmenuComponent.prototype.logout = function () {
        this.ss.session = false;
    };
    TopmenuComponent.prototype.onLoginEvent = function (event) {
        if (event.value != "0") {
            document.getElementById("login").style.visibility = "hidden";
            this.ss.session = true;
        }
    };
    TopmenuComponent.prototype.gotoUserpage = function () {
        var link = ['/userpage'];
        this.router.navigate(link);
    };
    TopmenuComponent.prototype.gotoHomepage = function () {
        var link = ['/'];
        this.router.navigate(link);
    };
    return TopmenuComponent;
}());
TopmenuComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-topmenu',
        template: "\n  <ul>\n  <li><a (click)=\"gotoHomepage()\" >Games</a></li>\n\n  <li *ngIf=\"ss.session\" id=\"mypage\"><a (click)=\"gotoUserpage()\" >My page</a></li>\n  <li *ngIf=\"!ss.session\" style=\"float:right\" (click)=\"displayLoginComponent()\" ><a class=\"active\" >Login</a></li>\n  <li *ngIf=\"ss.session\" style=\"float:right\" (click)=\"logout()\" ><a class=\"active\" >Logout</a></li>\n</ul>\n  <my-login id=\"login\" (userId)=\"onLoginEvent($event);\" ></my-login>\n\n\n  ",
        styleUrls: ['topmenu.component.css']
    }),
    __metadata("design:paramtypes", [session_service_1.SessionService, router_1.Router])
], TopmenuComponent);
exports.TopmenuComponent = TopmenuComponent;
//# sourceMappingURL=topmenu.component.js.map