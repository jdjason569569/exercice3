import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  valueSubject = new BehaviorSubject<number>(0);
  count = interval(1000);

  constructor() { 
     this.count.subscribe((n)=>{
       this.valueSubject.next(this.getRandomNumber());
    });
  }

  get getNumbers$():  Observable<number>{
     return this.valueSubject.asObservable();
  }

  getRandomNumber(){
    return Math.floor(Math.random()*11);
  }
}
