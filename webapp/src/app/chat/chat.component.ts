import {Component} from '@angular/core';
import {Config} from '../config/config';

declare var SockJS: any;
declare var Stomp: any;

@Component({
  selector: 'app-root',
  templateUrl: './chat.component.html'
})

export class ChatComponent {

  private stompClient;

  public constructor(private config: Config) {
    let self = this;
    //TODO externalize address
    let socket = new SockJS(config.getEnv("urls").serverAddress + config.getEnv("urls").socketEndpoint);
    self.stompClient = Stomp.over(socket);
    self.stompClient.connect({}, function (frame) {
      console.log('Connected: ' + frame);
      self.stompClient.subscribe(config.getEnv("urls").socket + '/1', function (greeting) {
        console.log("received");
      });
    });
  }

}
