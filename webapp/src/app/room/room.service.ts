import {Http} from "@angular/http";
import {Config} from "../config/config";
import {Injectable} from "@angular/core";

@Injectable()
export class RoomService {

  constructor(private http: Http,  private config: Config) {

  }

  sendMessage(roomId: number, message: string) {
    let url = this.config.getEnv("urls").serverAddress + this.config.getEnv("urls").restUrl + "rooms/" + roomId;
    return this.http.post(url, message).subscribe(response => console.log(response))
  }

}
