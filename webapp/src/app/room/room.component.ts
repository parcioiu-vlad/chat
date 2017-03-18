import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Config} from "../config/config";
import {RoomService} from "./room.service";

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

  constructor(private router: ActivatedRoute, private config: Config, private roomService: RoomService) {
    let self = this;

    this.router.params.subscribe(params => {
      this.roomId = params['id']
    });

    let socket = new SockJS(config.getEnv("urls").serverAddress + config.getEnv("urls").socketEndpoint);
    self.stompClient = Stomp.over(socket);
    self.stompClient.connect({}, function (frame) {
      console.log('Connected: ' + frame);
      self.stompClient.subscribe(config.getEnv("urls").socket + '/1', function (greeting) {
        console.log("received");
      });
    });
  }

  private sendMessage() {
    this.roomService.sendMessage(1, this.messageToBeSent)
  }

}
