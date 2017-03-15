import {Injectable} from '@angular/core'
import {Http} from "@angular/http";

@Injectable()
export class Config {

  private env: Object;

  constructor(private http: Http) {
  }

  public load() {
    return this.http.get("app/config/env.json")
      .map(res => res.json())
      .subscribe((res) => {
        this.env = res;
        console.log(this.env);
      });
  }

  getEnv(key: string) {
    return this.env[key];
  }

}
