import { BrowserModule } from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import 'hammerjs';
import {
  MaterialModule,
  OverlayContainer,
  FullscreenOverlayContainer,
  MdSelectionModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import {RoomComponent} from "./room/room.component";

export const AppRoutes = [
  { path: 'chat', component: ChatComponent },
  { path: 'rooms/:id', component: RoomComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    RoomComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
