import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import { environment } from '../../environments/environment';
import {TokenService} from "../service/token.service";

declare let SockJS: any;
declare let Stomp: any;

@Component({
  selector: 'app-root',
  templateUrl: './room.component.html',
  providers: [TokenService]
})

export class RoomComponent {

  private roomId: number;
  private messageToBeSent: string;
  private stompClient;

  constructor(private router: ActivatedRoute, private tokenService: TokenService) {
    let self = this;

    this.router.params.subscribe(params => {
      this.roomId = params['id']
    });

    let jwtToken = this.tokenService.getAuthToken();

    let socket = new SockJS(environment.serverAddress + environment.socketEndpoint + "?token=" + jwtToken);
    self.stompClient = Stomp.over(socket);
    self.stompClient.connect({}, function (frame) {
      console.log('Connected: ' + frame);
      self.stompClient.subscribe(environment.socket + '/' + self.roomId, function (message) {
        console.log("received: " + message);
      });
    });
  }

  private sendMessage() {
    this.stompClient.send(environment.restUrl + "/" + this.roomId, {}, this.messageToBeSent);
  }

}
