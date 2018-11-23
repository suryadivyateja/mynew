import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  constructor(private ls:LoginService,private router:Router) { }
username:string;
  ngOnInit() {

  }
  step1(){
this.ls.setValue({status:true,value:this.username});
this.router.navigate(['/login/step2']);
  }

}
