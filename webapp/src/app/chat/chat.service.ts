import {Room} from "../model/room";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import { environment } from '../../environments/environment';
import {TokenService} from "../service/token.service";

@Injectable()
export class ChatService {

  constructor(private http: Http, private tokenService: TokenService) {
  }

  public createRoom(room: Room) {
    let url = environment.serverAddress + environment.restUrl + "rooms/";
    return this.http.post(url, room, this.tokenService.getHttpHeader()).map((res) => res.json())
  }

  public getRooms() {
    let url = environment.serverAddress + environment.restUrl + "rooms/";
    return this.http.get(url, this.tokenService.getHttpHeader()).map((res) => res.json())
  }

}
