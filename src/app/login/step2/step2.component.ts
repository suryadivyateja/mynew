import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/service/login.service';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
subscription;
username:string;
password:string;
  constructor(private ls:LoginService,private router:Router,private nzmodal:NzModalService) { 
    this.subscription =  this.ls.getValue().subscribe((a)=>{
      if(a['status'] === true){
        this.username = a['value'];
      }else{
      this.router.navigate(['/login/step1']);
    }
  })
  }

  ngOnInit() {
    
  }
login(){
  this.nzmodal.success({
    nzTitle:'New Site',
    nzContent:`Welcome back ${this.username}` 
  }) 
}
}
