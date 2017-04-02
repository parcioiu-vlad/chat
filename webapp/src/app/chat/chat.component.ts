import {Component} from '@angular/core';
import {Room} from '../model/room';
import {ChatService} from "./chat.service";

@Component({
  selector: 'app-root',
  templateUrl: './chat.component.html',
  providers: [ChatService]
})

export class ChatComponent {

  private room: Room;

  public constructor(private chatService: ChatService) {
    this.room = new Room
  }

  public createRoom() {
    this.chatService.createRoom(this.room).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }

}
