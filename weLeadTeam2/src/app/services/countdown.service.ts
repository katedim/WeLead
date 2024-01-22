import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountdownService {

  constructor() { }

  private publisher = new BehaviorSubject<any>(null);

  publishData(data: any) {
    console.log('call publishData');
    this.publisher.next(data);
  }
     
  // listenForData() {
  //   console.log('call listenForData');
  //   return this.publisher.asObservable();
  // }
  listenForData(): Observable<any> {
    console.log('call listenForData');
    return this.publisher.asObservable();
  }
}
