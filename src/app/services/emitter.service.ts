import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class EmitterService{
  public eventEmitter:EventEmitter<any>;
  constructor() {
    this.eventEmitter = new EventEmitter();
  }
  public setEventEmitter(value){
    this.eventEmitter.emit(value);
  }

}
