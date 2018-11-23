import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ValidUsernameDirective } from './directives/valid-username.directive';
import { LoginService } from './service/login.service';
import { ValidUserpasswordDirective } from './directives/valid-userpassword.directive';
@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    NgZorroAntdModule
  ],
  declarations: [LoginComponent, Step1Component, Step2Component,ValidUsernameDirective,ValidUserpasswordDirective],
  providers: [{ provide: NZ_I18N, useValue: en_US },LoginService],
})
export class LoginModule { }
