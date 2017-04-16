import {Room} from "../model/room";
import {Config} from "../config/config";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class ChatService {

  constructor(private http: Http, private config: Config) {
  }

  public createRoom(room: Room) {
    let url = this.config.getEnv("urls").serverAddress + this.config.getEnv("urls").restUrl + "rooms/";
    return this.http.post(url, room).map((res) => res.json())
  }

  public getRooms() {
    let url = this.config.getEnv("urls").serverAddress + this.config.getEnv("urls").restUrl + "rooms/";
    return this.http.get(url).map((res) => res.json())
  }

}
