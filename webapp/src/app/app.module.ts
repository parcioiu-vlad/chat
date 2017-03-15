import { BrowserModule } from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import {Config} from "./config/config";

export const AppRoutes = [
  { path: 'chat', component: ChatComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
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
      useFactory: (config: Config) => () => config.load(),
      deps: [Config],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
