import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject('default message')
  currentMessage = this.messageSource.asObservable();
  constructor() { }
  chnageMessage(message:string){
    this.messageSource.next(message);

  }
}
