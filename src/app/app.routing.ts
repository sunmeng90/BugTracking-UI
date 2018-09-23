import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guards/guards';
import {NavigationComponent} from './navigation/navigation.component';
import {LoginLayoutComponent} from './login-layout/login-layout.component';
import {EmployeeComponent} from './employee/employee.component';
import {LoginComponent} from './login/login.component';
import {ProjectComponent} from './project/project.component';

const appRoutes: Routes = [
  // {path: '', component: EmployeeComponent, canActivate: [AuthGuard]},
  {
    path: '', component: NavigationComponent, canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'employees', pathMatch: 'full'},
      {path: 'employees', component: EmployeeComponent},
      {path: 'projects', component: ProjectComponent}
    ]
  },
  {
    path: 'login', component: LoginLayoutComponent,
    children: [
      {path: '', component: LoginComponent}
    ]
  },
  // otherwise redirect to employee
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
