"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
require('hammerjs');
var material_1 = require('@angular/material');
var app_component_1 = require('./app.component');
var chat_component_1 = require('./chat/chat.component');
var config_1 = require("./config/config");
var room_component_1 = require("./room/room.component");
exports.AppRoutes = [
    { path: 'chat', component: chat_component_1.ChatComponent },
    { path: 'room/:id', component: room_component_1.RoomComponent }
];
function loadConfig(config) {
    config.load();
}
exports.loadConfig = loadConfig;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                chat_component_1.ChatComponent,
                room_component_1.RoomComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(exports.AppRoutes),
                material_1.MaterialModule.forRoot()
            ],
            providers: [config_1.Config,
                {
                    provide: core_1.APP_INITIALIZER,
                    useFactory: loadConfig,
                    deps: [config_1.Config],
                    multi: true
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
