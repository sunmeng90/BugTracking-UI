import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guards/guards';
import {NavigationComponent} from './navigation/navigation.component';
import {LoginLayoutComponent} from './login-layout/login-layout.component';
import {EmployeeListComponent} from './employee/employee-list.component';
import {LoginComponent} from './login/login.component';
import {ProjectComponent} from './project/project.component';
import {t} from '@angular/core/src/render3';
import {SidenavComponent} from './navigation/sidenav.component';
import {ActionListComponent} from './action-list/action-list.component';
import {ActionPageComponent} from './action-page/action-page.component';
import {SideMenuService} from './service/side-menu.service';
import {ProjectEditorComponent} from './project/project-editor.component';
import {EmployeeEditorComponent} from './employee/employee-editor.component';
import {BugEditorComponent} from './bug/bug-editor.component';
import {BugsComponent} from './bug/bugs.component';


const appRoutes: Routes = [
  {
    path: 'login', component: LoginLayoutComponent,
    children: [
      {path: '', component: LoginComponent}
    ]
  },
  {
    path: '', component: NavigationComponent, canActivate: [AuthGuard],
    children: [
      {
        path: ':section', component: SidenavComponent,
        children: [
          {path: '', redirectTo: 'actions', pathMatch: 'full'},
          {
            path: 'actions',
            children: [
              {path: '', component: ActionListComponent},
            ]
          },
          {
            path: 'viewEmployees',
            component: EmployeeListComponent
          },
          {
            path: 'createEmployee',
            component: EmployeeEditorComponent
          },
          {
            path: 'viewProjects',
            component: ProjectComponent
          },
          {
            path: 'createProject',
            component: ProjectEditorComponent
          },
          {
            path: 'viewBugs',
            component: BugsComponent
          },
          {
            path: 'createBug',
            component: BugEditorComponent
          }
        ]
      }
    ]
  },

  // otherwise redirect to employee
  {path: '**', redirectTo: ''}
];

// export const routing = RouterModule.forRoot(appRoutes, {enableTracing: true});
export const routing = RouterModule.forRoot(appRoutes, {enableTracing: false});
