import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import { environment } from '../../environments/environment';

@Injectable()
export class RoomService {

  constructor(private http: Http) {

  }

  sendMessage(roomId: number, message: string) {
    let url = environment.serverAddress + environment.restUrl + "rooms/" + roomId;
    return this.http.post(url, message).subscribe(response => console.log(response))
  }

}
