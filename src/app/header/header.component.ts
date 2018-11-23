import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
noNots:boolean = true;
notifications=[];

  constructor() { }
  notCount=0;
currencies=[
  {
    name:'USD - US Dollar',
    value:'USD',
    show:true
  },
  {
    name:'EUR - EURO',
    value:'EUR',
    show:true
  },
  {
    name:'INR - INDIAN RUPEE',
    value:'INR',
    show:false
  }
];
currency = this.currencies[2];
  ngOnInit() {
  }
  changeCurrency(c){
    this.currencies.every((e)=>{
     return e['show'] = true;
    });
    this.currencies[this.currencies.indexOf(c)]['show']=false;
    this.currency = this.currencies[this.currencies.indexOf(c)];
  }

}
