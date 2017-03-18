"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ChatComponent = (function () {
    function ChatComponent(config) {
        this.config = config;
        var self = this;
        //TODO externalize address
        var socket = new SockJS(config.getEnv("urls").serverAddress + config.getEnv("urls").socketEndpoint);
        self.stompClient = Stomp.over(socket);
        self.stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            self.stompClient.subscribe(config.getEnv("urls").socket + '/1', function (greeting) {
                console.log("received");
            });
        });
    }
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './chat.component.html'
        })
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
