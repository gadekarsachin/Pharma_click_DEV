import { Injectable } from '@angular/core';
// import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  private apiUrl = 'http://localhost:3000';

  private socket: Socket;
  constructor() { 
    this.socket = io(this.apiUrl);
  }

  public sendMessage(message: any) {
    this.socket.emit('new-message', message);
}

public getMessages = () => {
    return Observable.create((observer: any) => {
        this.socket.on('new-message', (message) => {
            observer.next(message);
        });
        return Observable;
        console.log("message in service", Observable);
    });
}

}
