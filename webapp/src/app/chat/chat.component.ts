import {Component} from '@angular/core';

declare var SockJS: any;
declare var Stomp: any;

@Component({
  selector: 'app-root',
  templateUrl: './chat.component.html'
})

export class ChatComponent {

  private stompClient;

  public constructor() {
    var self = this;

    //TODO externalize address
    var socket = new SockJS('http://localhost:9090/gs-guide-websocket');
    self.stompClient = Stomp.over(socket);
    self.stompClient.connect({}, function (frame) {
      console.log('Connected: ' + frame);
      self.stompClient.subscribe('/socket', function (greeting) {
        console.log("received");
      });
    });
  }

}
