import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login/login.component';
import { Step1Component } from 'src/app/login/step1/step1.component';
import { Step2Component } from 'src/app/login/step2/step2.component';

const routes: Routes = [
  {path:'login',component:LoginComponent,children:[
    {path:'',redirectTo:'step1',pathMatch:'full'},
    {path:'step1',component:Step1Component},
    {path:'step2',component:Step2Component},
    {path:'**',redirectTo:'step1'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
