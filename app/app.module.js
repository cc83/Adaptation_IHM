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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var ng2_responsive_1 = require("ng2-responsive");
var maincomponent_1 = require("./maincomponent/maincomponent");
var dashboard_component_1 = require("./dashboard-component/dashboard.component");
var game_service_1 = require("./game-service/game.service");
var game_directive_1 = require("./game-directive/game.directive");
var game_1 = require("./game/game");
var topmenu_component_1 = require("./topmenu-component/topmenu.component");
var gamedetail_component_1 = require("./gamedetail-component/gamedetail.component");
var login_component_1 = require("./login-component/login.component");
var session_service_1 = require("./session-service/session.service");
var userpage_component_1 = require("./userpage-component/userpage.component");
var config = {
    breakPoints: {
        xs: { max: 600 },
        sm: { min: 601, max: 959 },
        md: { min: 960, max: 1279 },
        lg: { min: 1280, max: 1919 },
        xl: { min: 1920 }
    },
    debounceTime: 100 // allow to debounce checking timer
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            common_1.CommonModule,
            ng2_responsive_1.ResponsiveModule,
            router_1.RouterModule.forRoot([
                {
                    path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full'
                },
                {
                    path: 'dashboard',
                    component: dashboard_component_1.DashboardComponent
                },
                { path: 'detail/:id',
                    component: gamedetail_component_1.GameDetailComponent
                },
                { path: 'userpage',
                    component: userpage_component_1.UserpageComponent
                }
            ], { useHash: true })
        ],
        declarations: [
            maincomponent_1.MainComponent,
            dashboard_component_1.DashboardComponent,
            game_directive_1.GameDirective,
            game_1.Game,
            topmenu_component_1.TopmenuComponent,
            gamedetail_component_1.GameDetailComponent,
            login_component_1.LoginComponent,
            userpage_component_1.UserpageComponent
        ],
        providers: [
            game_service_1.GameService,
            { provide: ng2_responsive_1.ResponsiveConfig, useFactory: function () { return new ng2_responsive_1.ResponsiveConfig(config); } },
            session_service_1.SessionService
        ],
        bootstrap: [maincomponent_1.MainComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map