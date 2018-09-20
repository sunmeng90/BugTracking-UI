import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import {MatTableModule} from '@angular/material';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './inteceptor/jwt.interceptor';
import {LoginComponent} from './login/login.component';
import {ErrorInterceptor} from './inteceptor/error.interceptor';
import {AlertComponent} from './alert/alert.component';
import {ReactiveFormsModule} from '@angular/forms';
import {routing} from './app.routing';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LoginComponent,
    AlertComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
