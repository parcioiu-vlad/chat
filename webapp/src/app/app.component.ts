import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: Http) {
  }

  public login() {
    window.location.href = environment.serverAddress + environment.loginUrl;
  }

}
