import {Room} from "../model/room";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import { environment } from '../../environments/environment';

@Injectable()
export class ChatService {

  constructor(private http: Http) {
  }

  public createRoom(room: Room) {
    let url = environment.serverAddress + environment.restUrl + "rooms/";
    return this.http.post(url, room).map((res) => res.json())
  }

  public getRooms() {
    let url = environment.serverAddress + environment.restUrl + "rooms/";
    return this.http.get(url).map((res) => res.json())
  }

}
