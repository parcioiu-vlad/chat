"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Config = (function () {
    function Config(http) {
        this.http = http;
    }
    Config.prototype.load = function () {
        var _this = this;
        return this.http.get("app/config/env.json")
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.env = res;
            console.log(_this.env);
        });
    };
    Config.prototype.getEnv = function (key) {
        return this.env[key];
    };
    Config = __decorate([
        core_1.Injectable()
    ], Config);
    return Config;
}());
exports.Config = Config;