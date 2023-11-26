import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
import { SocketioService } from '../shared/socketio.service';
import { ChatCompoComponent } from './chat-compo/chat-compo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ModalModule } from 'ngb-modal';
import { HttpClientModule } from '@angular/common/http';


const config: SocketIoConfig = {
  // url: 'https://joiningdbstagingbackend.azurewebsites.net',
  url: 'http://localhost:3000',
  options: {
    transports: ['websocket', 'polling', 'flashsocket']
  },
};

@NgModule({
  declarations: [ChatCompoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // ModalModule,
    HttpClientModule
    ],
  providers: [SocketioService]
})
export class ChatModule { }
