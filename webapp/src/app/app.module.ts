import { BrowserModule } from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';
import {
  MaterialModule,
  OverlayContainer,
  FullscreenOverlayContainer,
  MdSelectionModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import {Config} from "./config/config";
import { ChatComponent } from './chat/chat.component';
import {RoomComponent} from "./room/room.component";

export const AppRoutes = [
  { path: 'chat', component: ChatComponent },
  { path: 'rooms/:id', component: RoomComponent}
];

export function loadConfig(config: Config) {
  return () => config.load()
}

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    RoomComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    MaterialModule.forRoot()
  ],
  providers: [Config,
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      deps: [Config],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
