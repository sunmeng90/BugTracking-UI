import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EmployeeListComponent} from './employee/employee-list.component';
import {
  MatButtonModule, MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule, MatNativeDateModule, MatPaginatorModule, MatRadioModule, MatSelectModule,
  MatSidenavModule, MatStepperModule,
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
import {SidenavComponent} from './navigation/sidenav.component';
import {ActionListComponent} from './action-list/action-list.component';
import {ActionPageComponent} from './action-page/action-page.component';
import { EmployeeEditorComponent } from './employee/employee-editor.component';
import { ProjectEditorComponent } from './project/project-editor.component';
import { BugEditorComponent } from './bug/bug-editor.component';
import { BugsComponent } from './bug/bugs.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    LoginComponent,
    AlertComponent,
    NavigationComponent,
    LoginLayoutComponent,
    ProjectComponent,
    HeaderComponent,
    SidenavComponent,
    ActionListComponent,
    ActionPageComponent,
    EmployeeEditorComponent,
    ProjectEditorComponent,
    BugEditorComponent,
    BugsComponent
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
    MatListModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule,
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
