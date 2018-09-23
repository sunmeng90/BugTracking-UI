import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './inteceptor/jwt.interceptor';
import {LoginComponent} from './login/login.component';
import {ErrorInterceptor} from './inteceptor/error.interceptor';
import {AlertComponent} from './alert/alert.component';
import {ReactiveFormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {NavigationComponent} from './navigation/navigation.component';
import {LoginLayoutComponent} from './login-layout/login-layout.component';
import {ProjectComponent} from './project/project.component';
import {HeaderComponent} from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LoginComponent,
    AlertComponent,
    NavigationComponent,
    LoginLayoutComponent,
    ProjectComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule ,
    BrowserAnimationsModule,
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
