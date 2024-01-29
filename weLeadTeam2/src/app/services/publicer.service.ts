import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicerService {

  constructor() { }
  private publisher = new BehaviorSubject<any>(null);
  

  publishData(data: any) {
    console.log('call publishData');
    this.publisher.next(data);
  }

  listenForData(): Observable<any> {
    console.log('call listenForData');
    return this.publisher.asObservable();
  }
}
