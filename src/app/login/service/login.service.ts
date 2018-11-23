import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
private username = new Subject<Object>();
  constructor() { }
  setValue(d:Object){
    this.username.next(d);
  }
  getValue(){
    return this.username.asObservable();
  }
}
