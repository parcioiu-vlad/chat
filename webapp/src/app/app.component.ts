import {Component, OnInit} from '@angular/core';
import { environment } from '../environments/environment';
import {Http} from "@angular/http";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TokenService} from "./service/token.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: Http, private router: ActivatedRoute, private tokenService: TokenService) {
    this.router.queryParams.subscribe(
      data => {
        let authorizationCode = data[environment.authCodeParam];
        if (authorizationCode) {
          this.tokenService.setJwtToken(authorizationCode);
        }
      });
  }

  public login() {
    window.location.href = environment.serverAddress + environment.loginUrl;
  }

}
