import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {Http, RequestOptions, URLSearchParams} from "@angular/http";
import {Headers} from '@angular/http';

@Injectable()
export class TokenService {

  constructor(private http: Http) {

  }

  public setToken(authorizationCode: string) {
    localStorage.setItem(environment.authCodeParam, authorizationCode);
  }

  public getAuthToken() {
    return localStorage.getItem(environment.authCodeParam);
  }

  public setJwtToken(authorizationCode: string) {
    let url = environment.serverAddress + environment.restUrl + "token";

    let params: URLSearchParams = new URLSearchParams();
    params.set('code', authorizationCode);

    let requestOptions = new RequestOptions();
    requestOptions.params = params;

    this.http.get(url, requestOptions).map((res) =>res.json()).subscribe(data => {
        this.setToken(data.id_token);
      },
      err => {
        console.log("could not get token", err)
      });
  }

  public getHttpHeader() {
    let headers = new Headers();
    headers.append(environment.tokenHeaderName, this.getAuthToken());
    return new RequestOptions({ headers: headers });
  }

}
