import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from 'src/app/login/login.module';

const routes: Routes = [
  {path:'login',loadChildren:'./login/login.module#LoginModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  LoginModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
