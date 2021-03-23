import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { WebsocketService } from './websocket.services';
import { map } from 'rxjs/operators';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';


@Injectable({
  providedIn: 'root'
})
export class LogService {
  public messages: Subject<string>;

  constructor(
    private adal: MsAdalAngular6Service,
    wsService: WebsocketService
  ) {
    let url: string = "ws://localhost:53875/ws?socketId=" + adal.userInfo.profile["WindowsNT"];

    this.messages = <Subject<string>>wsService.connect(url).pipe(
      map(
        (response: MessageEvent): string => {
          return JSON.parse(response.data);
        }
      )
    );
  }
}
