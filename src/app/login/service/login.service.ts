import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
private username = new BehaviorSubject<any>({status:false});
  constructor(private router:Router) { }
  setValue(d:any){
    let a = new Promise((resolve,reject)=>{
      this.username.next(d);
      resolve();
    });
    a.then(()=>{
      console.log('aaa');
      this.router.navigate(['/login/step2'])
    })
  }
  getValue():Observable<any>{
    return this.username.asObservable();
  }
}
