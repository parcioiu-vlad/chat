import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {RoomService} from "./room.service";
import { environment } from '../../environments/environment';

declare let SockJS: any;
declare let Stomp: any;

@Component({
  selector: 'app-root',
  templateUrl: './room.component.html',
  providers: [RoomService]
})

export class RoomComponent {

  private roomId: number;
  private messageToBeSent: string;
  private stompClient;

  constructor(private router: ActivatedRoute, private roomService: RoomService) {
    let self = this;

    this.router.params.subscribe(params => {
      this.roomId = params['id']
    });

    let socket = new SockJS(environment.serverAddress + environment.socketEndpoint);
    self.stompClient = Stomp.over(socket);
    self.stompClient.connect({}, function (frame) {
      console.log('Connected: ' + frame);
      self.stompClient.subscribe(environment.socket + '/' + self.roomId, function (greeting) {
        console.log("received");
      });
    });
  }

  private sendMessage() {
    this.roomService.sendMessage(this.roomId, this.messageToBeSent)
  }

}
