import {Component} from '@angular/core';
import {Room} from '../model/room';
import {ChatService} from "./chat.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './chat.component.html',
  providers: [ChatService]
})

export class ChatComponent {

  private room: Room;
  private roomList: Room[];

  public constructor(private chatService: ChatService, private router: Router) {
    this.room = new Room;
    this.getRooms();
  }

  public createRoom() {
    this.chatService.createRoom(this.room).subscribe(
      data => {
          this.router.navigate(["rooms", data.id])
        },
      err => {
        console.log("could not create room", err)
      }
    )
  }

  public openRoom(room: Room) {
    this.router.navigate(["rooms", room.id])
  }

  private getRooms() {
    this.chatService.getRooms().subscribe(
      data => {
        this.roomList = data
      },
      err => {
        console.log("could not get rooms", err)
      }
    )
  }

}
